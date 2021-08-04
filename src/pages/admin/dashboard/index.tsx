import { GetServerSideProps } from 'next';
import { Panel } from '../../../containers/Panel';

export default function AdminHome() {
  return <Panel></Panel>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { access_token } = ctx.req.cookies;

  if (!access_token || access_token === undefined) {
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
