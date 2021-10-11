import { Posts } from './style';
import { BlogPostCard, BlogHeadingTitle } from '../../components';

import { PostData } from '../../domain/posts/post';

export type PaginationProps = {
  posts: PostData[];
  categoryName?: string;
};

export const PaginationPage = ({ posts, categoryName }: PaginationProps) => {
  return (
    <>
      <BlogHeadingTitle>
        {categoryName ? `Posts na categoria ${categoryName}` : 'Todos os posts'}
      </BlogHeadingTitle>
      <Posts>
        {posts.map((post) => {
          return <BlogPostCard key={post.slug} post={post} />;
        })}
      </Posts>
    </>
  );
};
