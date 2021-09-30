import Head from 'next/head';

import { CategoriesContainer } from './style';
import { SiJavascript, SiTypescript, SiPython } from 'react-icons/si';
import { PostData } from '../../domain/posts/post';

import {
  Header,
  MainContainer,
  PostCard,
  Footer,
  Heading,
  RecentPosts,
  Spotlight,
  CategoryCta,
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
        <Heading>
          <h1>Bem vindo ao Colster Blog</h1>
          <p>Um lugar para aprender a magia da programação</p>
        </Heading>
        <Spotlight posts={posts} />

        <CategoriesContainer>
          <CategoryCta
            as="/posts/page/1/javascript"
            href="/posts/page/[...param]"
            title="JavaScript"
          >
            <SiJavascript size={32} />
          </CategoryCta>
          <CategoryCta
            as="/posts/page/1/typescript"
            href="/posts/page/[...param]"
            title="TypeScript"
          >
            <SiTypescript size={32} />
          </CategoryCta>
          <CategoryCta as="/posts/page/1/python" href="/posts/page/[...param]" title="Python">
            <SiPython size={32} />
          </CategoryCta>
        </CategoriesContainer>
        <RecentPosts>
          {posts.map((post) => {
            return (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                cover={post.cover.format.small}
                category={post.category.name}
                author={post.author.name}
              />
            );
          })}
        </RecentPosts>
      </MainContainer>
      <Footer />
    </>
  );
}
