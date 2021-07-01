import Link from 'next/link';
import { PostCoverFormat } from '../../domain/posts/post';
import { Container, PostCardCover, PostCardHeading, Wrapper, Divider, Category } from './style';

type PostCardProps = {
  slug: string;
  title: string;
  cover: PostCoverFormat;
  category: string;
  author: string;
};

export function PostCard({ slug, title, cover, category, author }: PostCardProps) {
  return (
    <Container>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <Wrapper>
          <PostCardCover>
            <img src={cover.url} alt="" />
          </PostCardCover>
          <PostCardHeading>
            <h2>{title}</h2>
            <div>
              <Category>{category}</Category>
              <Divider />
              <p>{author}</p>
            </div>
          </PostCardHeading>
        </Wrapper>
      </Link>
    </Container>
  );
}
