import { GetServerSideProps } from 'next';
import { DashboardContainer } from '../../../components';
import { EditUser } from '../../../containers/';

import { IContainerRequest } from '../../../interfaces/IContainerRequest';

import { verifyAuthentication } from '../../../services/auth/verifyAuthentication';

export default function AdminHome({ theme, toggleTheme }: IContainerRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Meu perfil">
      <EditUser />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  verifyAuthentication(ctx);

  return {
    props: {},
  };
};
