import { GetServerSidePropsContext } from 'next';
import { destroyCookie } from 'nookies';
import { ParsedUrlQuery } from 'querystring';

export function verifyAuthentication(ctx: GetServerSidePropsContext<ParsedUrlQuery>) {
  const { refresh_token } = ctx.req.cookies;

  const loggoutUser = {
    redirect: {
      destination: '/cboard/login',
      permanent: false,
    },
  };

  if (!refresh_token) {
    destroyCookie(ctx, 'isAuthenticated');
    return { invalidUser: true, loggoutUser };
  }

  return { invalidUser: false };
}
