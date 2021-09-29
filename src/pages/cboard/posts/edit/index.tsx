import { GetServerSideProps } from 'next';

import { DashboardContainer } from '../../../../components';
import { DashboardPostEditorHome } from '../../../../containers';
import { IDashboardPostHomePage } from '../../../../interfaces/IDashboardPostHomePage';
import { getAllPosts, verifyAuthentication } from '../../../../services';

export default function DashboardPostsEditorHome({
  posts,
  theme,
  toggleTheme,
}: IDashboardPostHomePage) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Editar post">
      <DashboardPostEditorHome posts={posts} />
    </DashboardContainer>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts();
  const { invalidUser, loggoutUser } = verifyAuthentication(ctx);

  if (invalidUser) return loggoutUser;

  return {
    props: { posts },
  };
};
