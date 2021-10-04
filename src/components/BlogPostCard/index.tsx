import Link from 'next/link';

import {
  CategoryPostsBox,
  PostCard,
  PostCardOverlay,
  PostCardData,
  PostCardTitle,
  PostCardCategory,
  PostCardAuthor,
} from './style';

import { formatDate } from '../../utils/format-date';
import { PostData } from '../../domain/posts/post';

interface IBlogPostCardRequest {
  posts: PostData[];
}

export const BlogPostCard = ({ posts }: IBlogPostCardRequest) => {
  return (
    <CategoryPostsBox>
      {posts.map((post, index) => {
        const formatedDate = formatDate(post.createdAt);

        if (index >= 4) return;

        return (
          <Link key={post.id} href={{ pathname: '/posts/[slug]', query: { slug: post.slug } }}>
            <PostCard image={post.cover.format.medium.url}>
              <PostCardOverlay />
              <PostCardData>
                <div>
                  <PostCardTitle>{post.title}</PostCardTitle>
                  <PostCardCategory>{post.category.name}</PostCardCategory>
                </div>
                <PostCardAuthor>
                  <b>{post.author.name}</b>, {formatedDate}
                </PostCardAuthor>
              </PostCardData>
            </PostCard>
          </Link>
        );
      })}
    </CategoryPostsBox>
  );
};
