import { useState, createContext, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';
import { toast, ToastOptions } from 'react-toastify';

interface IRequestContext {
  requestOnProgress: boolean;
  isLoading: boolean;
  isRefreshing: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setRequestOnProgress: Dispatch<SetStateAction<boolean>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  responseStatusFactory: (successful: boolean, message: string) => void;
  refreshServerSideProps: () => void;
}

interface IRequestProvider {
  children: React.ReactNode;
}

export const RequestContext = createContext({} as IRequestContext);

export function RequestProvider({ children }: IRequestProvider) {
  const router = useRouter();

  // Window render related states
  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [requestOnProgress, setRequestOnProgress] = useState(false);

  //Create a new response status
  function responseStatusFactory(successful: boolean, message: string) {
    const toastOptions = {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
    } as ToastOptions;

    successful ? toast.success(message, toastOptions) : toast.error(message, toastOptions);
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
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
