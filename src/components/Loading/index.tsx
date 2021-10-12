import { Container, LoadingWheel, LoadingMessage } from './style';

interface LoadingProps {
  children?: React.ReactNode;
}

export const Loading = ({ children }: LoadingProps) => {
  return (
    <Container>
      <LoadingWheel></LoadingWheel>
      <LoadingMessage>{children}</LoadingMessage>
    </Container>
  );
};
