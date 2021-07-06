import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/dist/client/router';

import { getAllPosts, countAllPosts } from '../../../data/posts/';
import { PostData } from '../../../domain/posts/post';
import { HomePage } from '../../../containers';
import { PaginationData } from '../../../domain/posts/pagination';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  //TODO - Create the Components for each one of those
  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada</div>;

  return <HomePage posts={posts} category={category} pagination={pagination}></HomePage>;
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
  console.log(numberOfPosts);

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
