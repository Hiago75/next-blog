import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { destroyCookie } from 'nookies';
import { APP_NAME } from '../../config';
import { Login } from '../../containers';

export default function DashboardLoginPage() {
  return (
    <>
      <Head>
        <title>{`${APP_NAME} | Login`}</title>
      </Head>
      <Login></Login>;
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { isAuthenticated, refresh_token } = ctx.req.cookies;

  if (isAuthenticated && !refresh_token) {
    destroyCookie(ctx, 'isAuthenticated');
  }

  return {
    props: {},
  };
};
