import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Panel } from '../../../containers/Panel';

export default function AdminHome() {
  return <Panel></Panel>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextblog.auth']: token } = parseCookies(ctx);

  if (!token || token === undefined) {
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
