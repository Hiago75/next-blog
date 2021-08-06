/* eslint-disable react-hooks/exhaustive-deps */
import Router from 'next/router';

import { createContext, useEffect, useState } from 'react';

import { ILoginRequest } from '../interfaces/ILoginRequest';
import { IUser } from '../interfaces/IUser';
import { fetchUserData, loginRequest } from '../services/';
import { parseCookies, setCookie } from 'nookies';

interface IAuthProviderRequest {
  children: React.ReactNode;
}

interface IAuthContext {
  isAuthenticated: string;
  user: IUser;
  errors: IError;
  isRetrievingUserData: boolean;
  login: (data: ILoginRequest) => Promise<void>;
}

interface IError {
  message: string;
}

//Create a context that can be accessed from the entire application
export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderRequest) {
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<IError | null>(null);
  const [isRetrievingUserData, setIsRetrievingUserData] = useState(false);
  const { isAuthenticated } = parseCookies();

  // If isAuthenticated token exists and have a real value try to renew user data
  useEffect(() => {
    if (isAuthenticated) {
      setIsRetrievingUserData(true);
      fetchUserData(true)
        .then((user) => {
          if (user) setUser(user);
          setIsRetrievingUserData(false);
        })
        .catch((error) => {
          const { message } = error;
          setErrors(message);
        });
    }
  }, []);

  //Login user on application
  async function login({ email: username, password }: ILoginRequest) {
    const isAuthorized = await loginRequest({ email: username, password });

    const { error, message } = isAuthorized;
    if (error) return setErrors(message);

    setErrors(null);

    const user = await fetchUserData(false);
    setUser(user);

    setCookie(undefined, 'isAuthenticated', 'true', {
      maxAge: 60 * 60 * 24,
    });

    Router.push('/admin/dashboard');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, isRetrievingUserData, user, errors, login }}>
      {children}
    </AuthContext.Provider>
  );
}
