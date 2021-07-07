import Link from 'next/link';
import { PostCoverFormat } from '../../domain/posts/post';
import { Container, PostCardCover, PostCardHeading, Wrapper } from './style';
import { Category } from '../../styles/global-styles';
import { LineDivider } from '../../containers/Post/style';

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
        <>
          <Wrapper>
            <PostCardCover>
              <img src={cover.url} alt="" />
            </PostCardCover>
            <PostCardHeading>
              <Category>
                <Link as={`/posts/page/1/${category.toLowerCase()}`} href="/posts/page/[...param]">
                  <a>{category}</a>
                </Link>
              </Category>
              <h2>{title}</h2>
              <div>
                <p>Por {author}</p>
              </div>
            </PostCardHeading>
          </Wrapper>
        </>
      </Link>
    </Container>
  );
}
