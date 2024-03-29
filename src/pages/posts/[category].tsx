import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Custom404 from '../404';
import { getAllCategories, getAllPosts } from '../../services';
import { PostCategory, PostData } from '../../domain/posts/post';
import { PaginationPage } from '../../containers';
import { BlogFullScreenContainer, Loading } from '../../components';
import { IContainerRequest } from '../../interfaces/IContainerRequest';

export interface IPageProps extends IContainerRequest {
  posts: PostData[];
  categories: PostCategory[];
  categoryName?: string;
}

export default function Page({ posts, categoryName, categories, theme, toggleTheme }: IPageProps) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;
  if (!posts?.length)
    return <Custom404 theme={theme} toggleTheme={toggleTheme} categories={categories} />;

  return (
    <BlogFullScreenContainer theme={theme} toggleTheme={toggleTheme} categories={categories}>
      <PaginationPage categoryName={categoryName} posts={posts}></PaginationPage>;
    </BlogFullScreenContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryName = context.params.category;
  const categories = await getAllCategories();

  if (typeof categoryName !== 'string') return;
  const posts = await getAllPosts(categoryName);

  return {
    props: { posts, categoryName, categories },
  };
};
