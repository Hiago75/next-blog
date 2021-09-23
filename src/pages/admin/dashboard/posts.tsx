import { GetServerSideProps } from 'next';

import { PanelPosts } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { verifyAuthentication, getAllCategories } from '../../../services';
import { IDashboardPostsPageRequest } from '../../../interfaces/IDashboardPostsPageRequest';

export default function AdminPosts({ categories, theme, toggleTheme }: IDashboardPostsPageRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Criação de post">
      <PanelPosts categories={categories} />
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
