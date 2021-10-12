import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { Login } from '../../containers';

export default function DashboardLoginPage() {
  return <Login></Login>;
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
