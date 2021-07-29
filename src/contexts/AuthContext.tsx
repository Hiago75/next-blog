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
  signIn: (data: ILoginRequest) => Promise<void>;
}

//Create a context that can be accessed from the entire application
export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderRequest) {
  const [user, setUser] = useState<IUser | null>(null);
  const isAuthenticated = !!user;

  //If token exists try to renew user data
  useEffect(() => {
    const { 'nextblog.auth': token } = parseCookies();

    if (token) {
      getUserData(token).then((user) => {
        setUser(user);
      });
    }
  }, []);

  //Login user on application
  async function signIn({ email: username, password }: ILoginRequest) {
    // Retrieve user information and token from axios request
    const response = await signInRequest({ email: username, password });
    if (!response) throw new Error('Server failed to respond');

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
    <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
