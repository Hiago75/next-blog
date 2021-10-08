import Head from 'next/head';

import { Posts } from './style';
import {
  BlogFullScreenContainer,
  Header,
  Footer,
  BlogPostCard,
  BlogHeadingTitle,
} from '../../components';

import { PostData } from '../../domain/posts/post';
import { APP_NAME } from '../../config';

export type PaginationProps = {
  posts: PostData[];
  categoryName?: string;
};

export const PaginationPage = ({ posts, categoryName }: PaginationProps) => {
  return (
    <>
      <Head>
        <title>{`${APP_NAME}`}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Header />

      <BlogFullScreenContainer>
        <BlogHeadingTitle>
          {categoryName ? `Posts na categoria ${categoryName}` : 'Todos os posts'}
        </BlogHeadingTitle>
        <Posts>
          {posts.map((post) => {
            return <BlogPostCard key={post.slug} post={post} />;
          })}
        </Posts>
      </BlogFullScreenContainer>

      <Footer />
    </>
  );
};
