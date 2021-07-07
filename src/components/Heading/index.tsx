import { Container } from './style';

type HeadingElements = {
  children: React.ReactNode;
};

export const Heading = ({ children }: HeadingElements) => {
  return <Container>{children}</Container>;
};
