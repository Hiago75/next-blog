import { Container } from './styles';

type ChildrenElement = {
  children: React.ReactNode;
  onScroll?: (event?: React.UIEvent<HTMLElement>) => void;
};

export function MainContainer({ onScroll, children }: ChildrenElement) {
  return <Container onScroll={onScroll}>{children}</Container>;
}
