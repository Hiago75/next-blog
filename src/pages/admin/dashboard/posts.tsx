import { GetServerSideProps } from 'next';

import { PanelPosts } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { IContainerRequest } from '../../../interfaces/IContainerRequest';
import { verifyAuthentication } from '../../../services';

export default function AdminPosts({ theme, toggleTheme }: IContainerRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Criação de post">
      <PanelPosts />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  verifyAuthentication(ctx);

  return {
    props: {},
  };
};
