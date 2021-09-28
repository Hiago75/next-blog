import { GetServerSideProps } from 'next';
import { useContext } from 'react';

import { DashboardHomePage } from '../../containers';
import { DashboardContainer } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { countAllPosts, verifyAuthentication } from '../../services';

import { IDashboardHomeRequest } from '../../interfaces/IDashboardHomeRequest';

export default function AdminHome({ numberOfPosts, theme, toggleTheme }: IDashboardHomeRequest) {
  const { user } = useContext(AuthContext);

  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme}>
      <DashboardHomePage user={user} numberOfPosts={numberOfPosts} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const numberOfPosts = await countAllPosts();
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);

  if (invalidUser) return loggoutUser;

  return {
    props: { numberOfPosts },
  };
};
