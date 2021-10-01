import { GetServerSideProps } from 'next';

import { DashboardNewPost } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { verifyAuthentication, getAllCategories } from '../../../services';
import { IDashboardNewPostPageRequest } from '../../../interfaces/IDashboardNewPostPageRequest';

export default function DashboardNewPostPage({
  categories,
  theme,
  toggleTheme,
}: IDashboardNewPostPageRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Criação de post">
      <DashboardNewPost categories={categories} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const categories = await getAllCategories();
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);

  if (invalidUser) return loggoutUser;

  return {
    props: { categories },
  };
};
