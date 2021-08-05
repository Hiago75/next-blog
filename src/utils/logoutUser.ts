import Router from 'next/router';
import { logoutRequest } from '../services/auth/logoutRequest';

export function logoutUser() {
  //TODO: Render error screen
  logoutRequest();
  Router.push('/admin');
}
