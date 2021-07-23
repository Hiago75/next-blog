import { Container, PanelContent } from './style';

type SmallPanelProps = {
  children: React.ReactNode;
};

export const SmallPanel = ({ children }: SmallPanelProps) => {
  return (
    <Container>
      <PanelContent>{children}</PanelContent>
    </Container>
  );
};
