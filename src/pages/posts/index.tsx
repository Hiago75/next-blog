import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Custom404 from '../404';
import { getAllCategories, getAllPosts } from '../../services';
import { PostCategory, PostData } from '../../domain/posts/post';
import { PaginationPage } from '../../containers';
import { BlogFullScreenContainer, Loading } from '../../components';

export type PageProps = {
  posts: PostData[];
  categories: PostCategory[];
};

export default function Page({ posts, categories }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;
  if (!posts.length) return <Custom404 categories={categories} />;

  return (
    <BlogFullScreenContainer categories={categories}>
      <PaginationPage posts={posts}></PaginationPage>;
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
