import { GetStaticProps } from 'next';
import { BlogFullScreenContainer } from '../components';
import { Error404 } from '../containers';
import { PostCategory } from '../domain/posts/post';
import { IContainerRequest } from '../interfaces/IContainerRequest';
import { getAllCategories } from '../services';

interface Custom404Request extends IContainerRequest {
  categories: PostCategory[];
}

export default function Custom404({ categories, theme, toggleTheme }: Custom404Request) {
  return (
    <BlogFullScreenContainer theme={theme} toggleTheme={toggleTheme} categories={categories}>
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
