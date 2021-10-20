import { PostBadge } from './style';

interface IBlogPostBadgeRequest {
  children: React.ReactNode;
}

export const BlogPostBadge = ({ children }: IBlogPostBadgeRequest) => {
  return <PostBadge>{children}</PostBadge>;
};
