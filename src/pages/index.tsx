import { GetStaticProps } from 'next';

import { getAllPosts } from '../services/posts/get-all-posts';
import { getAllCategories } from '../services';
import { PostCategory, PostData } from '../domain/posts/post';

import { HomePage } from '../containers/BlogHomePage';
import { BlogFullScreenContainer } from '../components';
import { IHeaderProps } from '../interfaces/IHeaderProps';
import { IContainerRequest } from '../interfaces/IContainerRequest';

export interface IHomeProps extends IContainerRequest {
  posts: PostData[];
  categories: PostCategory[];
  headerProps: IHeaderProps;
}

export default function Home({ posts, categories, theme, toggleTheme }: IHomeProps) {
  return (
    <BlogFullScreenContainer theme={theme} toggleTheme={toggleTheme} categories={categories}>
      <HomePage categories={categories} posts={posts}></HomePage>
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
