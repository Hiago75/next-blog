import { GetServerSideProps } from 'next';

import { DashboardContainer } from '../../../components';
import { DashboardRegisterProfile } from '../../../containers';

import { IContainerRequest } from '../../../interfaces/IContainerRequest';
import { verifyAuthentication } from '../../../services';

export default function DashboardRegisterProfilePage({ theme, toggleTheme }: IContainerRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Registrar usuário">
      <DashboardRegisterProfile />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);

  if (invalidUser) return loggoutUser;

  return {
    props: {},
  };
};
