import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';
import { ITimer } from '../interfaces/ITimer';
import { timer } from '../utils/timer';

interface IRequestContext {
  isLoading: boolean;
  displayResponse: boolean;
  success: boolean;
  requestTimer: ITimer;
  statusText: IStatusText;
  transitionTime: number;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setDisplayResponse: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setStatusText: Dispatch<SetStateAction<IStatusText>>;
}

interface IRequestProvider {
  children: React.ReactNode;
}

interface IStatusText {
  title: string;
  message: string;
}

export const RequestContext = createContext({} as IRequestContext);

export function RequestProvider({ children }: IRequestProvider) {
  const [isLoading, setLoading] = useState(false);
  const [displayResponse, setDisplayResponse] = useState(false);

  const [success, setSuccess] = useState<boolean>();
  const [statusText, setStatusText] = useState<IStatusText>();

  // Create a new timer
  const transitionTime = 2500;
  const [requestTimer] = useState(timer(() => setDisplayResponse(false), transitionTime));

  useEffect(() => {
    if (displayResponse) {
      requestTimer.resume();
    }
  });

  return (
    <RequestContext.Provider
      value={{
        transitionTime,
        isLoading,
        displayResponse,
        requestTimer,
        success,
        statusText,
        setLoading,
        setDisplayResponse,
        setSuccess,
        setStatusText,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
