import Router from 'next/router';

import { setCookie, parseCookies } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { api } from '../config/api-config';

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

  //If token exists and have a real value try to renew user data
  useEffect(() => {
    const { 'nextblog.auth': token } = parseCookies();

    if (token && token !== undefined) {
      getUserData(token).then((user) => {
        if (user) {
          setUser(user);
          Router.push('/admin/dashboard');
        }
      });
    }
  }, []);

  //Login user on application
  async function signIn({ email: username, password }: ILoginRequest) {
    // Retrieve user information and token from axios request
    const response = await signInRequest({ email: username, password });
    if (!response) return;

    const { error } = response;
    if (error) return setErrors(error);

    //Clear the errors
    setErrors(null);

    const { token, user } = response;

    //Set the cookie that will be used by the application
    setCookie(undefined, 'nextblog.auth', token, {
      maxAge: 60 * 60 * 24, //1 day (24 hours)
    });

    //Define the authorization header as the token for new requests to API
    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    setUser(user);

    //Redirect to Dashboard
    Router.push('/admin/dashboard');
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, errors, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
