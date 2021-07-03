import Head from 'next/head';

import { Container } from './style';
import { PostData } from '../../domain/posts/post';

import { Header, MainContainer, PostCard, Footer } from '../../components';
import { APP_NAME } from '../../config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                cover={post.cover.formats.small}
                category={post.category.name}
                author={post.author.name}
              />
            );
          })}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
