import Router from 'next/router';

import { createContext, useEffect, useState } from 'react';

import { ILoginRequest } from '../interfaces/ILoginRequest';
import { IUser } from '../interfaces/IUser';
import { fetchUserData, loginRequest, updateUserData } from '../services/';
import { parseCookies, setCookie } from 'nookies';

interface IAuthProviderRequest {
  children: React.ReactNode;
}

interface IAuthContext {
  isAuthenticated: string;
  user: IUser;
  errors: string;
  isRetrievingUserData: boolean;
  login: (data: ILoginRequest) => Promise<void>;
  refreshUserData: (hasRefreshToken: boolean) => Promise<void>;
  updateUser: (data: IUpdateRequest) => Promise<void>;
}

interface IUpdateRequest {
  name: string;
  email: string;
}

//Create context for authentication
export const AuthContext = createContext({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderRequest) {
  const [user, setUser] = useState<IUser | null>(null);
  const [errors, setErrors] = useState<string | null>(null);
  const [isRetrievingUserData, setIsRetrievingUserData] = useState(false);
  const { isAuthenticated } = parseCookies();

  //Refresh user data
  async function refreshUserData(hasRefreshToken: boolean) {
    setIsRetrievingUserData(true);

    fetchUserData(hasRefreshToken)
      .then((user) => {
        if (user) setUser(user);
        setIsRetrievingUserData(false);
      })
      .catch((error) => {
        const { message } = error;
        setErrors(message);
        setIsRetrievingUserData(false);
      });
  }

  //Login user on application
  async function login({ email: username, password }: ILoginRequest) {
    const isAuthorized = await loginRequest({ email: username, password });

    const { error, message } = isAuthorized;
    if (error) return setErrors(message);

    setErrors(null);

    try {
      const user = await fetchUserData(false);
      setUser(user);

      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 1);

      setCookie(undefined, 'isAuthenticated', 'true', {
        expires: expireDate,
        sameSite: 'strict',
        secure: true,
      });

      Router.push('/admin/dashboard');
    } catch (e) {
      console.log(e);
    }
  }

  //Update user data on DB
  async function updateUser({ name, email }) {
    const updatedUser = await updateUserData({ name, email });

    const { error, message } = updatedUser;
    if (error) return setErrors(message);

    setUser(updatedUser);
  }

  // If isAuthenticated token exists and have a real value try to renew user data
  useEffect(() => {
    if (isAuthenticated) {
      refreshUserData(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRetrievingUserData,
        user,
        errors,
        login,
        refreshUserData,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
