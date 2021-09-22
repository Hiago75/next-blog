import { GetServerSidePropsContext } from 'next';
import { destroyCookie } from 'nookies';
import { ParsedUrlQuery } from 'querystring';

export function verifyAuthentication(ctx: GetServerSidePropsContext<ParsedUrlQuery>) {
  const { refresh_token } = ctx.req.cookies;

  if (!refresh_token) {
    destroyCookie(ctx, 'isAuthenticated');
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }
}
