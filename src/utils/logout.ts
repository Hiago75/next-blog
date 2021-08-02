import Router from 'next/router';
import { destroyCookie } from 'nookies';

export function logout() {
  destroyCookie(undefined, 'nextblog.auth');
  Router.push('/admin');
}
