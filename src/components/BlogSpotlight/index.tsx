import Link from 'next/link';
import { AiFillStar } from 'react-icons/ai';

import readingTimeCalculator from '../../utils/readingTimeCalculator';

import { PostData } from '../../domain/posts/post';
import {
  Container,
  Post,
  PostImage,
  PostPreviewData,
  PostCategory,
  PostTitle,
  PostAuthor,
  PostImageBox,
} from './style';
import { formatDate } from '../../utils/format-date';
import { BlogPostBadge } from '..';

type SpotlightProps = {
  post: PostData;
};

export const Spotlight = ({ post }: SpotlightProps) => {
  const postFormatedDate = formatDate(post?.createdAt);
  const postReadingTime = readingTimeCalculator(post?.content);

  if (!post) return <h1>Parece tão vazio por aqui...</h1>;

  return (
    <Container>
      <Link href={{ pathname: '/post/[slug]', query: { slug: post.slug } }}>
        <Post>
          <PostImageBox>
            <PostImage src={post.cover.format.large.url} />
          </PostImageBox>

          <PostPreviewData>
            <BlogPostBadge>
              <AiFillStar /> Acabou de sair do forno
            </BlogPostBadge>

            <PostTitle>{post.title}</PostTitle>
            <PostCategory>
              <b>{post.category.name}</b> | {postReadingTime} min de leitura
            </PostCategory>
            <PostAuthor>
              Publicado por <b>{post.author.name}</b>, {postFormatedDate}
            </PostAuthor>
          </PostPreviewData>
        </Post>
      </Link>
    </Container>
  );
};
