import { GetServerSideProps } from 'next';

import { DashboardContainer } from '../../../components';
import { PanelCategories } from '../../../containers';
import { IDashboardCategoriesPageRequest } from '../../../interfaces/IDashboardCategoriesPageRequest';
import { countAllPosts, getAllCategories, verifyAuthentication } from '../../../services';

export default function AdminCategories({
  numberOfPosts,
  categories,
  theme,
  toggleTheme,
}: IDashboardCategoriesPageRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme}>
      <PanelCategories categories={categories} numberOfPosts={numberOfPosts} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const numberOfPosts = await countAllPosts();
  const categories = await getAllCategories();
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);

  if (invalidUser) return loggoutUser;

  return {
    props: { numberOfPosts, categories },
  };
};
