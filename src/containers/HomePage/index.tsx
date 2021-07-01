import { Container } from './style';

import { PostData } from '../../domain/posts/post';

import { Header, MainContainer, PostCard, Footer } from '../../components';

export type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <>
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
