import Link from 'next/link';

import readingTimeCalculator from '../../utils/readingTimeCalculator';

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

export const BlogPostCardBox = ({ posts }: IBlogPostCardRequest) => {
  return (
    <CategoryPostsBox>
      {posts?.map((post, index) => {
        const formatedDate = formatDate(post.createdAt);
        const postReadingTime = readingTimeCalculator(post.content);

        if (index >= 3) return;

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
      })}
    </CategoryPostsBox>
  );
};
