import { GetStaticPaths, GetStaticProps } from 'next';

import { countAllPosts, getAllPosts } from '../../data/posts';
import { PostData } from '../../domain/posts/post';
import { Pagination } from '../../containers/PaginationPage';

export type DynamicPostProps = {
  posts: PostData[];
  category: string;
};

export default function DynamicCategory({ posts, category }: DynamicPostProps) {
  return <Pagination category={category} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numOfPosts}`);

  return {
    paths: posts.map((post) => {
      return { params: { category: post.category.name.toLowerCase() } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts(
    `_sort=id:desc&_start=0&_limit=30&category.name_contains=${context.params.category}`,
  );

  return {
    props: { posts, category: context.params.category },
  };
};
