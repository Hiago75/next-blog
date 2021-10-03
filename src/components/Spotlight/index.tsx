import Link from 'next/link';

import { PostData } from '../../domain/posts/post';
import {
  Container,
  Post,
  PostImage,
  PostPreviewData,
  PostCategory,
  PostTitle,
  PostAuthor,
  SidePosts,
  PostImageBox,
} from './style';
import { formatDate } from '../../utils/format-date';

type SpotlightProps = {
  posts: PostData[];
};

export const Spotlight = ({ posts }: SpotlightProps) => {
  const recentPosts = posts.slice(1, 3);
  const mainPost = posts[0];
  const mainPostFormatedDate = formatDate(mainPost.createdAt);

  return (
    <Container>
      <Link href={{ pathname: '/posts/[slug]', query: { slug: mainPost.slug } }}>
        <Post className="main-post">
          <PostImageBox>
            <PostImage src={mainPost.cover.format.large.url} className="main-post" />
          </PostImageBox>
          <PostPreviewData className="main-post">
            <PostCategory>{mainPost.category.name}</PostCategory>
            <PostTitle>{mainPost.title}</PostTitle>
            <PostAuthor>
              {mainPost.author.name}, {mainPostFormatedDate}
            </PostAuthor>
          </PostPreviewData>
        </Post>
      </Link>

      <SidePosts>
        {recentPosts.map((post) => {
          const formatedDate = formatDate(post.createdAt);

          return (
            <Link key={post.id} href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
              <Post className="side-post">
                <PostImageBox>
                  <PostImage src={post.cover.format.medium.url} />
                </PostImageBox>
                <PostPreviewData>
                  <PostCategory>{post.category.name}</PostCategory>
                  <PostTitle>{post.title}</PostTitle>
                  <PostAuthor>
                    {post.author.name}, {formatedDate}
                  </PostAuthor>
                </PostPreviewData>
              </Post>
            </Link>
          );
        })}
      </SidePosts>
    </Container>
  );
};
