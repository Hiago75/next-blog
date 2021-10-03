import Link from 'next/link';

import { PostData } from '../../domain/posts/post';
import { Container, MainSpotlight, Title, Details } from './style';
import { BallDivider, Category } from '../../styles/global-styles';

type SpotlightProps = {
  posts: PostData[];
};

export const Spotlight = ({ posts }: SpotlightProps) => {
  const mainPost = posts[0];
  const { cover, title, author, category, slug } = mainPost;

  return (
    <Container>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <MainSpotlight>
          <img src={cover.format.medium.url}></img>
          <Title>{title}</Title>
          <Details>
            <p>{author.name}</p>
            <BallDivider />
            <Category>{category.name}</Category>
          </Details>
        </MainSpotlight>
      </Link>
    </Container>
  );
};
