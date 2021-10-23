import Router from 'next/router';

import { createContext, useEffect, useState, useMemo } from 'react';

import { ILoginRequest } from '../interfaces/ILoginRequest';
import { IUser } from '../interfaces/IUser';
import { fetchUserData, loginRequest, updateUserData } from '../services/';
import { parseCookies } from 'nookies';
import { logoutUser } from '../utils/logoutUser';

interface IAuthProviderRequest {
  children: React.ReactNode;
}

interface IAuthContext {
  isAuthenticated: string;
  user: IUser;
  loginOnProgress: boolean;
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
  const userInformation = useMemo(() => user, [login, refreshUserData]);
  const [errors, setErrors] = useState<string | null>(null);
  const [isRetrievingUserData, setIsRetrievingUserData] = useState(false);
  const [loginOnProgress, setLoginOnProgress] = useState(false);

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
    setLoginOnProgress(true);
    const isAuthorized = await loginRequest({ email: username, password });

    const { error, message } = isAuthorized;
    if (error) {
      setLoginOnProgress(false);
      return setErrors(message);
    }

    setErrors(null);

    const user = await fetchUserData(false);
    setUser(user);
    setLoginOnProgress(false);

    Router.push('/cboard');
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
    //If necessary try to renew user data
    if (Router.asPath.startsWith('/cboard') && isAuthenticated && !user) {
      try {
        refreshUserData(true);
      } catch (error) {
        return setErrors(error);
      }
    }

    // Loggout not authenticated users
    if (Router.asPath.startsWith('/cboard') && !isAuthenticated) logoutUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isRetrievingUserData,
        loginOnProgress,
        user: userInformation,
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
