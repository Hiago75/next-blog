import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import Custom404 from '../../404';
import { getAllPosts, countAllPosts } from '../../../data/posts/';
import { PostData } from '../../../domain/posts/post';
import { PaginationPage } from '../../../containers';
import { PaginationData } from '../../../domain/posts/pagination';
import { Loading } from '../../../components';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <Loading />;
  if (!posts.length) return <Custom404 />;

  return (
    <PaginationPage posts={posts} category={category} pagination={pagination}></PaginationPage>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = Number(context.params.param[0]);
  const category = context.params.param[1] || '';
  const postsPerPage = 6;
  const startFrom = (page - 1) * postsPerPage;

  const nextPage = page + 1;
  const previousPage = page - 1;

  const categoryQuery = category ? `&category.name_contains=${category}` : '';
  const posts = await getAllPosts(
    `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`,
  );

  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPosts,
    category,
    postsPerPage,
  };

  return {
    props: { posts, category, pagination },
  };
};
