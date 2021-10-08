import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Custom404 from '../404';
import { getAllPosts } from '../../services';
import { PostData } from '../../domain/posts/post';
import { PaginationPage } from '../../containers';
import { Loading } from '../../components';

export type PageProps = {
  posts: PostData[];
  categoryName?: string;
};

export default function Page({ posts, categoryName }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;
  if (!posts.length) return <Custom404 />;

  return <PaginationPage categoryName={categoryName} posts={posts}></PaginationPage>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const categoryName = context.params.category;

  if (typeof categoryName !== 'string') return;
  const posts = await getAllPosts(categoryName);

  return {
    props: { posts, categoryName },
  };
};
