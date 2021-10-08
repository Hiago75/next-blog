import { GetStaticProps } from 'next';
import { getAllPosts } from '../services/posts/get-all-posts';
import { PostCategory, PostData } from '../domain/posts/post';
import { HomePage } from '../containers/BlogHomePage';
import { getAllCategories } from '../services';

export type HomeProps = {
  posts: PostData[];
  categories: PostCategory[];
};

export default function Home({ posts, categories }: HomeProps) {
  return <HomePage categories={categories} posts={posts}></HomePage>;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  const categories = await getAllCategories();

  return {
    props: { posts, categories },
  };
};
