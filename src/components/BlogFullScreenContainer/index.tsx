import { Container } from './style';

interface BlogFullScreenContainerRequest {
  children: React.ReactNode;
}

export const BlogFullScreenContainer = ({ children }: BlogFullScreenContainerRequest) => {
  return <Container>{children}</Container>;
};
