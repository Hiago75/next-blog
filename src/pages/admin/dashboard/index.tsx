import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { Panel } from '../../../containers/Panel';

export default function AdminHome() {
  return <Panel></Panel>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token, refresh_token } = ctx.req.cookies;

  if (!access_token && !refresh_token) {
    destroyCookie(ctx, 'isAuthenticated');
    return {
      redirect: {
        destination: '/admin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
