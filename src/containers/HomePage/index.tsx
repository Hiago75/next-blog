import Head from 'next/head';

import { PostData } from '../../domain/posts/post';

import {
  Header,
  MainContainer,
  PostCard,
  Footer,
  Pagination,
  Heading,
  RecentPosts,
} from '../../components';
import { APP_NAME } from '../../config';
import { PaginationData } from '../../domain/posts/pagination';
import { Spotlight } from '../../components/Spotlight';

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
        <Heading>
          <h1>Welcome to NextBlog</h1>
          <p>A place to learn about the magic of programming</p>
        </Heading>
        <Spotlight posts={posts} />
        <RecentPosts pagination={pagination}>
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
        </RecentPosts>
        <Pagination {...pagination} />
      </MainContainer>
      <Footer />
    </>
  );
}
