import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { useContext } from 'react';
import { DashboardContainer } from '../../../components';
import { EditUser } from '../../../containers/';
import { AuthContext } from '../../../contexts/AuthContext';
import { IContainerRequest } from '../../../interfaces/IContainerRequest';

export default function AdminHome({ theme, toggleTheme }: IContainerRequest) {
  const { user } = useContext(AuthContext);

  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Meu perfil">
      <EditUser user={user} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { refresh_token, isAuthenticated } = ctx.req.cookies;

  if (!refresh_token) {
    isAuthenticated ? destroyCookie(ctx, 'isAuthenticated') : '';
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
