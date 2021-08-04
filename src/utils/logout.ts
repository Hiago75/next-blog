import Router from 'next/router';

export function logoutUser() {
  //TODO: send request to destroy user refresh token
  //TODO: Render error screen
  Router.push('/admin');
}
