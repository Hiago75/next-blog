import { GetServerSideProps } from 'next';

import { DashboardContainer } from '../../components';
import { DashboardCategories } from '../../containers';
import { IDashboardCategoriesPageRequest } from '../../interfaces/IDashboardCategoriesPageRequest';
import { countAllPosts, getAllCategories, getAllTags, verifyAuthentication } from '../../services';

export default function DashboardCategoriesPage({
  numberOfPosts,
  categories,
  tags,
  theme,
  toggleTheme,
}: IDashboardCategoriesPageRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme}>
      <DashboardCategories tags={tags} categories={categories} numberOfPosts={numberOfPosts} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);
  if (invalidUser) return loggoutUser;

  const numberOfPosts = await countAllPosts();
  const categories = await getAllCategories();
  const tags = await getAllTags();

  return {
    props: { numberOfPosts, categories, tags },
  };
};
