import Head from 'next/head';

import { PostData } from '../../domain/posts/post';

import { Header, MainContainer, Footer } from '../../components';
import { APP_NAME } from '../../config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export function HomePage({ category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${APP_NAME}` : APP_NAME}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Header />
      <MainContainer>Container</MainContainer>
      <Footer />
    </>
  );
}
