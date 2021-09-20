import { GetServerSideProps } from 'next';
import { destroyCookie } from 'nookies';

import { PanelPosts } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { IContainerRequest } from '../../../interfaces/IContainerRequest';

export default function AdminPosts({ theme, toggleTheme }: IContainerRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Criação de post">
      <PanelPosts />
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
