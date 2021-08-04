import Router from 'next/router';

import { createContext, useState } from 'react';

import { ILoginRequest } from '../interfaces/ILoginRequest';
import { IUser } from '../interfaces/IUser';
import { getUserData, signInRequest } from '../services/';

interface IAuthProviderRequest {
  children: React.ReactNode;
}

interface IAuthContext {
  isAuthenticated: boolean;
  user: IUser;
  errors: IError;
  signIn: (data: ILoginRequest) => Promise<void>;
}

interface IError {
  error: string;
}

//Create a context that can be accessed from the entire application
export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderRequest) {
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<IError | null>(null);
  const isAuthenticated = !!user;

  //TODO: Refactor
  // If token exists and have a real value try to renew user data
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     getUserData().then((user) => {
  //       if (user) {
  //         setUser(user);
  //         Router.push('/admin/dashboard');
  //       }
  //     });
  //   }
  // }, []);

  //Login user on application
  async function signIn({ email: username, password }: ILoginRequest) {
    const isAuthorized = await signInRequest({ email: username, password });

    const { error, message } = isAuthorized;
    if (error) return setErrors(message);

    setErrors(null);

    const user = await getUserData();
    setUser(user);

    Router.push('/admin/dashboard');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, errors, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
