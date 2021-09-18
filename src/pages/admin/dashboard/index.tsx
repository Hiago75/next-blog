import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';
import { useContext } from 'react';

import { PanelHomePage } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { AuthContext } from '../../../contexts/AuthContext';
import { countAllPosts } from '../../../services';

import { IDashboardHomeRequest } from '../../../interfaces/IDashboardHomeRequest';

export default function AdminHome({ numberOfPosts, theme, toggleTheme }: IDashboardHomeRequest) {
  const { user } = useContext(AuthContext);

  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme}>
      <PanelHomePage user={user} numberOfPosts={numberOfPosts} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const numberOfPosts = await countAllPosts();
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
    props: { numberOfPosts },
  };
};
