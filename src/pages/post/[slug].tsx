import { GetStaticPaths, GetStaticProps } from 'next';
import { useState } from 'react';

import { getAllCategories, getAllPosts, getPost } from '../../services';
import { PostCategory, PostData } from '../../domain/posts/post';
import { Post } from '../../containers/BlogPost';
import Custom404 from '../404';
import { BlogFullScreenContainer } from '../../components';
import { IContainerRequest } from '../../interfaces/IContainerRequest';

export interface IDynamicPostProps extends IContainerRequest {
  post: PostData;
  categories: PostCategory[];
}

export default function DynamicPost({ post, categories, theme, toggleTheme }: IDynamicPostProps) {
  const [readingProgress, setReadingProgress] = useState(0);

  if (!post?.title)
    return <Custom404 theme={theme} toggleTheme={toggleTheme} categories={categories}></Custom404>;

  return (
    <BlogFullScreenContainer
      theme={theme}
      toggleTheme={toggleTheme}
      progressBar
      categories={categories}
      readingProgress={readingProgress}
    >
      <Post setReadingProgress={setReadingProgress} post={post} />;
    </BlogFullScreenContainer>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

  return {
    paths: posts?.map((post) => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPost(context.params.slug);
  const categories = await getAllCategories();

  return {
    props: { post, categories },
  };
};
