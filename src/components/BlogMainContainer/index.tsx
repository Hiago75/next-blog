import { Container } from './styles';

type ChildrenElement = {
  children: React.ReactNode;
};

export function MainContainer({ children }: ChildrenElement) {
  return <Container>{children}</Container>;
}
