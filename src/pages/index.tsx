import { GetStaticProps } from 'next';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';
import { HomePage } from '../containers/HomePage';
import { Header } from '../components/Header';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <Header />
      <HomePage posts={posts}></HomePage>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  return {
    props: { posts },
  };
};