import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Custom404 from '../404';
import { getAllPosts } from '../../services';
import { PostData } from '../../domain/posts/post';
import { PaginationPage } from '../../containers';
import { Loading } from '../../components';

export type PageProps = {
  posts: PostData[];
};

export default function Page({ posts }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;
  if (!posts.length) return <Custom404 />;

  return <PaginationPage posts={posts}></PaginationPage>;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};
