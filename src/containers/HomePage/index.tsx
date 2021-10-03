import Head from 'next/head';
import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';

import { PostData } from '../../domain/posts/post';

import { RecentPosts, RecentPostsHeader, Title, LinkButton, LineDivider } from './style';
import { Spotlight, Header, MainContainer, Footer } from '../../components';
import { APP_NAME } from '../../config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${APP_NAME}` : APP_NAME}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Header />
      <MainContainer>
        <RecentPosts>
          <RecentPostsHeader>
            <Title>Posts mais recentes</Title>
            <Link href="/">
              <LinkButton>
                Ver todos os posts <FiChevronsRight />
              </LinkButton>
            </Link>
            <LineDivider />
          </RecentPostsHeader>
          <Spotlight posts={posts} />
        </RecentPosts>
      </MainContainer>
      <Footer />
    </>
  );
}
