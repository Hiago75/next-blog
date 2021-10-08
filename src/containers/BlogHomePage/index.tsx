import Head from 'next/head';

import { PostCategory, PostData } from '../../domain/posts/post';

import { RecentPosts, SectionTitle, CategoryPosts, CategoryPostBox } from './style';
import {
  Spotlight,
  Header,
  MainContainer,
  BlogHeadingTitle,
  Footer,
  BlogPostCardBox,
} from '../../components';
import { APP_NAME } from '../../config';

export type HomePageProps = {
  posts: PostData[];
  categories: PostCategory[];
};

export function HomePage({ posts, categories }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{`${APP_NAME}`}</title>
        <meta name="description" content="Just an simple test blog made with NextJS" />
      </Head>
      <Header />
      <MainContainer>
        <RecentPosts>
          <BlogHeadingTitle linkHref="posts/page/" linkText="Ver todos os posts">
            Posts mais recentes
          </BlogHeadingTitle>
          <Spotlight posts={posts} />
        </RecentPosts>

        <SectionTitle>Fique por dentro das novidades em...</SectionTitle>

        <CategoryPosts>
          {categories.map((category) => {
            const categoryPosts = posts.filter((post) => post.category.name === category.name);

            return (
              <CategoryPostBox key={category.id}>
                <BlogHeadingTitle
                  linkHref={`posts/${category.name}`}
                  linkText="Ver todos os posts desta categoria"
                >
                  {category.name}
                </BlogHeadingTitle>
                <BlogPostCardBox posts={categoryPosts} />
              </CategoryPostBox>
            );
          })}
        </CategoryPosts>
      </MainContainer>

      <Footer />
    </>
  );
}
