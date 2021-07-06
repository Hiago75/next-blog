import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';
import { HomePage } from '../containers/HomePage';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <HomePage posts={posts}></HomePage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postsPerPage = 6;
  const posts = await getAllPosts(`_sort=id:desc&_start=0&_limit=${postsPerPage}`);

  return {
    props: { posts },
  };
};
