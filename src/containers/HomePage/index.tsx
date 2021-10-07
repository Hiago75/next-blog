import Head from 'next/head';

import { PostData } from '../../domain/posts/post';

import { RecentPosts, SectionTitle, CategoryPosts, CategoryPostBox } from './style';
import {
  Spotlight,
  Header,
  MainContainer,
  BlogHeadingTitle,
  Footer,
  BlogPostCard,
} from '../../components';
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
          <BlogHeadingTitle linkText="Ver todos os posts">Posts mais recentes</BlogHeadingTitle>
          <Spotlight posts={posts} />
        </RecentPosts>

        <SectionTitle>Fique por dentro das novidades em...</SectionTitle>
        <CategoryPosts>
          <CategoryPostBox>
            <BlogHeadingTitle linkText="Ver todos os posts desta categoria">
              Front-end
            </BlogHeadingTitle>
            <BlogPostCard posts={posts} />
          </CategoryPostBox>

          <CategoryPostBox>
            <BlogHeadingTitle linkText="Ver todos os posts desta categoria">
              Back-End
            </BlogHeadingTitle>
            <BlogPostCard posts={posts} />
          </CategoryPostBox>

          <CategoryPostBox>
            <BlogHeadingTitle linkText="Ver todos os posts desta categoria">
              Marketing
            </BlogHeadingTitle>
            <BlogPostCard posts={posts} />
          </CategoryPostBox>
        </CategoryPosts>
      </MainContainer>

      <Footer />
    </>
  );
}
