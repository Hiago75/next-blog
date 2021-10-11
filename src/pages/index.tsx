import { GetStaticProps } from 'next';

import { getAllPosts } from '../services/posts/get-all-posts';
import { getAllCategories } from '../services';
import { PostCategory, PostData } from '../domain/posts/post';

import { HomePage } from '../containers/BlogHomePage';
import { BlogFullScreenContainer } from '../components';
import { IHeaderProps } from '../interfaces/IHeaderProps';

export type HomeProps = {
  posts: PostData[];
  categories: PostCategory[];
  headerProps: IHeaderProps;
};

export default function Home({ posts, categories }: HomeProps) {
  return (
    <BlogFullScreenContainer categories={categories}>
      <HomePage categories={categories} posts={posts}></HomePage>;
    </BlogFullScreenContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return {
    props: { posts, categories },
  };
};
