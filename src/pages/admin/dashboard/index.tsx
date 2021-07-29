import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Panel } from '../../../containers/Panel';

export default function AdminHome() {
  return <Panel></Panel>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['nextblog.auth']: token } = parseCookies(ctx);

  console.log('fui chamado');

  if (!token) {
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
