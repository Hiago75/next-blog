import { GetServerSideProps } from 'next';

import { DashboardPostsHome } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { verifyAuthentication, getAllPosts } from '../../../services';
import { IDashboardPostHomePage } from '../../../interfaces/IDashboardPostHomePage';

export default function AdminPosts({ posts, theme, toggleTheme }: IDashboardPostHomePage) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Posts">
      <DashboardPostsHome posts={posts} />
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
