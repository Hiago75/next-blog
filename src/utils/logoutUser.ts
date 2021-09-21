import Router from 'next/router';
import { destroyCookie } from 'nookies';
import { logoutRequest } from '../services/auth/logoutRequest';

export async function logoutUser() {
  //TODO: Render error screen
  logoutRequest().then(() => {
    destroyCookie(undefined, 'isAuthenticated');
    Router.push('/admin');
  });
}
