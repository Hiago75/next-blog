import Head from 'next/head';

import { Footer, Header } from '..';
import { APP_NAME } from '../../config';
import { Container } from './style';

import { PostCategory } from '../../domain/posts/post';
import { IContainerRequest } from '../../interfaces/IContainerRequest';

interface BlogFullScreenContainerRequest extends IContainerRequest {
  children: React.ReactNode;
  categories: PostCategory[];
  readingProgress?: number;
  progressBar?: boolean;
}

export const BlogFullScreenContainer = ({
  children,
  categories,
  readingProgress,
  progressBar,
  theme,
  toggleTheme,
}: BlogFullScreenContainerRequest) => {
  return (
    <>
      <Head>
        <title>{`${APP_NAME}`}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        data={categories}
        progressBar={progressBar}
        currentProgress={readingProgress}
      />
      <Container>{children}</Container>;
      <Footer />
    </>
  );
};
