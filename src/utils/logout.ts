import Router from 'next/router';
import { destroyCookie } from 'nookies';

export function logout(errorMessage: string) {
  console.log(errorMessage);
  destroyCookie(undefined, 'nextblog.auth');
  Router.push('/admin');
}
