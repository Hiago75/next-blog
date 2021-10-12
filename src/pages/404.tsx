import { GetStaticProps } from 'next';
import { BlogFullScreenContainer } from '../components';
import { Error404 } from '../containers';
import { PostCategory } from '../domain/posts/post';
import { getAllCategories } from '../services';

interface Custom404Request {
  categories: PostCategory[];
}

export default function Custom404({ categories }: Custom404Request) {
  return (
    <BlogFullScreenContainer categories={categories}>
      <Error404></Error404>
    </BlogFullScreenContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = await getAllCategories();

  return {
    props: { categories },
  };
};
