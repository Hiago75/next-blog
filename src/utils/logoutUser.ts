import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { logoutRequest } from '../services/auth/logoutRequest';

export function logoutUser() {
  //TODO: Render error screen
  logoutRequest();
  destroyCookie(undefined, 'isAuthenticated');
  Router.push('/admin');
}
