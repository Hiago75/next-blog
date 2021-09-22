import { GetServerSideProps } from 'next';

import { DashboardContainer } from '../../../components';
import { PanelCategories } from '../../../containers';
import { IDashboardCategoriesPageRequest } from '../../../interfaces/IDashboardCategoriesPageRequest';
import { countAllPosts, verifyAuthentication } from '../../../services';

export default function AdminCategories({
  numberOfPosts,
  theme,
  toggleTheme,
}: IDashboardCategoriesPageRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme}>
      <PanelCategories numberOfPosts={numberOfPosts} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const numberOfPosts = await countAllPosts();

  verifyAuthentication(ctx);

  return {
    props: {
      numberOfPosts,
    },
  };
};
