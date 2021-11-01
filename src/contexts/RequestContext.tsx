import { useState, createContext, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { TOAST_OPTIONS } from '../config';

interface IRequestContext {
  requestOnProgress: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setRequestOnProgress: Dispatch<SetStateAction<boolean>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  responseStatusFactory: (successful: boolean, message: string) => void;
  refreshServerSideProps: () => void;
  createSilentRequest: (silentReqCallback: ISilentReqCallback) => Promise<void>;
  createNewRequest: (reqCallback: IReqCallback) => Promise<void>;
  createNewFormRequest: (reqCallback: IReqCallback, formValidator: IFormValidator) => Promise<void>;
}

type IReqCallback = () => Promise<{ error: boolean; message: string }>;
type IFormValidator = () => boolean | void;
type ISilentReqCallback = () => Promise<void>;

interface IRequestProvider {
  children: React.ReactNode;
}

export const RequestContext = createContext({} as IRequestContext);

export function RequestProvider({ children }: IRequestProvider) {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [requestOnProgress, setRequestOnProgress] = useState(false);

  //Create a new response status
  function responseStatusFactory(successful: boolean, message: string) {
    successful ? toast.success(message, TOAST_OPTIONS) : toast.error(message, TOAST_OPTIONS);
  }

  function handleSubmitResponse(success: boolean, message: string) {
    setRequestOnProgress(false);
    responseStatusFactory(success, message);
  }

  //Handle form requests
  async function createNewFormRequest(reqCallback: IReqCallback, formValidator: IFormValidator) {
    setRequestOnProgress(true);
    const isValid = formValidator();
    if (!isValid) {
      window.scrollTo(0, 0);
      return setRequestOnProgress(false);
    }

    const { error, message } = await reqCallback();
    if (error) {
      window.scrollTo(0, 0);
      setRequestOnProgress(false);
      return handleSubmitResponse(false, message);
    }

    setRequestOnProgress(false);
    window.scrollTo(0, 0);
    return handleSubmitResponse(true, message);
  }

  //Handle normal requests
  async function createNewRequest(reqCallback: IReqCallback) {
    setRequestOnProgress(true);

    const { error, message } = await reqCallback();
    if (error) return handleSubmitResponse(false, message);

    setRequestOnProgress(false);
    return handleSubmitResponse(true, message);
  }

  // Just set and remove the loading, don't show errors or anything like that
  async function createSilentRequest(silentReqCallback: ISilentReqCallback) {
    setRequestOnProgress(true);
    await silentReqCallback();
    setRequestOnProgress(false);
  }

  // Refresh server side props
  function refreshServerSideProps() {
    router.replace(router.asPath);
    setIsRefreshing(true);
  }

  return (
    <RequestContext.Provider
      value={{
        requestOnProgress,
        isLoading,
        isRefreshing,
        setRequestOnProgress,
        setLoading,
        setIsRefreshing,
        responseStatusFactory,
        refreshServerSideProps,
        createSilentRequest,
        createNewRequest,
        createNewFormRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
