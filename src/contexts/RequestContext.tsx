import { useEffect, useState, createContext, Dispatch, SetStateAction } from 'react';

interface IRequestContext {
  isLoading: boolean;
  displayResponse: boolean;
  success: boolean;
  requestMessage: string;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setDisplayResponse: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  setRequestMessage: Dispatch<SetStateAction<string>>;
}

interface IRequestProvider {
  children: React.ReactNode;
}

export const RequestContext = createContext({} as IRequestContext);

export function RequestProvider({ children }: IRequestProvider) {
  const [isLoading, setLoading] = useState(false);
  const [displayResponse, setDisplayResponse] = useState(false);

  const [success, setSuccess] = useState<boolean>();
  const [requestMessage, setRequestMessage] = useState('');

  useEffect(() => {
    if (displayResponse) {
      setTimeout(() => {
        setDisplayResponse(false);
      }, 5000);
    }
  });

  return (
    <RequestContext.Provider
      value={{
        isLoading,
        displayResponse,
        success,
        requestMessage,
        setLoading,
        setDisplayResponse,
        setSuccess,
        setRequestMessage,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
}
