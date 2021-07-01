import { Container } from './style';

import { PostData } from '../../domain/posts/post';

import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { Footer } from '../../components/Footer';

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
