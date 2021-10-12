import { GetServerSideProps } from 'next';
import { useContext } from 'react';

import { DashboardHome } from '../../containers';
import { DashboardContainer } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { countAllPosts, verifyAuthentication } from '../../services';

import { IDashboardHomeRequest } from '../../interfaces/IDashboardHomeRequest';

export default function DashboardHomePage({
  numberOfPosts,
  theme,
  toggleTheme,
}: IDashboardHomeRequest) {
  const { user } = useContext(AuthContext);

  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme}>
      <DashboardHome user={user} numberOfPosts={numberOfPosts} />
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
