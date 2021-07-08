import Link from 'next/link';

import { PostData } from '../../domain/posts/post';
import { Container, MainSpotlight, SpotlightContent, Title, Details } from './style';
import { BallDivider, Category } from '../../styles/global-styles';
import { PostCard } from '../PostCard';

type SpotlightProps = {
  posts: PostData[];
};

export const Spotlight = ({ posts }: SpotlightProps) => {
  const spotlightPosts = posts.slice(1, 4);
  const mainPost = posts[0];
  const { cover, title, author, category, slug } = mainPost;

  return (
    <Container>
      <Link href="/posts/[slug]" as={`/posts/${slug}`}>
        <MainSpotlight>
          <img src={cover.formats.medium.url}></img>
          <Title>{title}</Title>
          <Details>
            <p>{author.name}</p>
            <BallDivider />
            <Category>{category.name}</Category>
          </Details>
        </MainSpotlight>
      </Link>
      <SpotlightContent>
        {spotlightPosts.map((post) => {
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
      </SpotlightContent>
    </Container>
  );
};
