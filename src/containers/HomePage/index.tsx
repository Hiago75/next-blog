import Head from 'next/head';

import { Container } from './style';
import { PostData } from '../../domain/posts/post';

import {
  Header,
  MainContainer,
  PostCard,
  Footer,
  Pagination,
  AllPostsLink,
} from '../../components';
import { APP_NAME } from '../../config';
import { PaginationData } from '../../domain/posts/pagination';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
  pagination?: PaginationData;
};

export function HomePage({ posts, category, pagination }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{category ? `${category} - ${APP_NAME}` : APP_NAME}</title>
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
        <Pagination {...pagination} />
        <AllPostsLink pagination={pagination} />
      </MainContainer>
      <Footer />
    </>
  );
}
