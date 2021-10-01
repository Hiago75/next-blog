import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

import { ITimer } from '../interfaces/ITimer';
import { timer } from '../utils/timer';

interface IRequestContext {
  isLoading: boolean;
  isRefreshing: boolean;
  responseStatus: IResponseStatus;
  requestTimer: ITimer;
  transitionTime: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIsRefreshing: Dispatch<SetStateAction<boolean>>;
  responseStatusFactory: (successful: boolean, title: string, message: string) => void;
  refreshServerSideProps: () => void;
}

interface IRequestProvider {
  children: React.ReactNode;
}

interface IStatusText {
  title: string;
  message: string;
}

interface IResponseStatus {
  displayResponse: boolean;
  successful: boolean;
  statusText: IStatusText;
}

export const RequestContext = createContext({} as IRequestContext);

export function RequestProvider({ children }: IRequestProvider) {
  const router = useRouter();

  // Window render related states
  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const defaultResponseStatus = {
    displayResponse: false,
    successful: undefined,
    statusText: undefined,
  };

  const [responseStatus, setResponseStatus] = useState<IResponseStatus>(defaultResponseStatus);

  // Create a new timer
  const transitionTime = 2500;
  const [requestTimer, setRequestTimer] = useState<ITimer>();

  function responseStatusFactory(successful: boolean, title: string, message: string) {
    const responseStatusObj = {
      displayResponse: true,
      successful,
      statusText: {
        title,
        message,
      },
    };

    setResponseStatus(responseStatusObj);
  }

  function refreshServerSideProps() {
    router.replace(router.asPath);
    setIsRefreshing(true);
  }

  function handleTimerEnd() {
    setResponseStatus({ displayResponse: false, ...responseStatus });
  }

  useEffect(() => {
    const requestTimer = timer(handleTimerEnd, transitionTime);
    setRequestTimer(requestTimer);

    if (responseStatus.displayResponse) {
      requestTimer.resume();
      alert(responseStatus.displayResponse);
    }
  }, []);

  return (
    <RequestContext.Provider
      value={{
        isLoading,
        isRefreshing,
        transitionTime,
        responseStatus,
        requestTimer,
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
