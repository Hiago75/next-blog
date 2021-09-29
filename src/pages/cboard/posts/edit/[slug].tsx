import { GetServerSideProps } from 'next';

import { DashboardPostEditor } from '../../../../containers';
import { DashboardContainer } from '../../../../components';
import { IDashboardPostEditor } from '../../../../interfaces/IDashboardPostEditor';

import { getAllCategories, getPost, verifyAuthentication } from '../../../../services';

export default function DashboardPostsEditorHome({
  post,
  categories,
  theme,
  toggleTheme,
}: IDashboardPostEditor) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Editar post">
      <DashboardPostEditor post={post} categories={categories} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);
  if (invalidUser) return loggoutUser;

  const slug = ctx.params.slug;
  const post = await getPost(slug);
  const categories = await getAllCategories();

  return {
    props: { post, categories },
  };
};
