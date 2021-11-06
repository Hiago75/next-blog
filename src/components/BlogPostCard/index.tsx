import Link from 'next/link';

import readingTimeCalculator from '../../utils/readingTimeCalculator';

import {
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
  post: PostData;
}

export const BlogPostCard = ({ post }: IBlogPostCardRequest) => {
  const formatedDate = formatDate(post.createdAt);
  const postReadingTime = readingTimeCalculator(post.content);

  return (
    <Link key={post.id} href={{ pathname: '/post/[slug]', query: { slug: post.slug } }}>
      <PostCard image={post.externalPhotoUrl || post.cover.format.medium.url}>
        <PostCardOverlay />
        <PostCardData>
          <div>
            <PostCardTitle>{post.title}</PostCardTitle>
            <PostCardCategory>
              <b>{post.category.name}</b> | {postReadingTime} min de leitura
            </PostCardCategory>
          </div>
          <PostCardAuthor>
            <b>{post.author.name}</b>, {formatedDate}
          </PostCardAuthor>
        </PostCardData>
      </PostCard>
    </Link>
  );
};
