import Head from 'next/head';

import { Container, Posts } from './style';
import { Header, MainContainer, PostCard, Pagination, Footer } from '../../components';

import { PostData } from '../../domain/posts/post';
import { APP_NAME } from '../../config';
import { PaginationData } from '../../domain/posts/pagination';

export type PaginationProps = {
  posts: PostData[];
  category: string;
  pagination: PaginationData;
};

export const PaginationPage = ({ posts, category, pagination }: PaginationProps) => {
  return (
    <>
      <Head>
        <title>{`${category} - ${APP_NAME}`}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Container>
        <Header />
        <MainContainer>
          <Posts>
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
          </Posts>
          <Pagination {...pagination} />
        </MainContainer>
        <Footer />
      </Container>
    </>
  );
};
