import { Container } from './style';
import { PostData } from '../../domain/posts/post';

export type HomePageProps = {
  posts: PostData[];
};

export function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      <div>
        {posts.map((post) => {
          return <h1 key={post.slug}>{post.title}</h1>;
        })}
      </div>
    </Container>
  );
}
