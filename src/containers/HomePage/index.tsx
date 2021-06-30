import { Container } from './style';
import { PostData } from '../../domain/posts/post';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';

export type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          <div>
            {posts.map((post) => {
              return <h1 key={post.slug}>{post.title}</h1>;
            })}
          </div>
        </Container>
      </MainContainer>
    </>
  );
}
