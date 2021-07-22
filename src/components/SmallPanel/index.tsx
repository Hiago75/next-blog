import { Container } from './style';
import { BasePanel } from '../BasePanel';

type SmallPanelProps = {
  children: React.ReactNode;
};

export const SmallPanel = ({ children }: SmallPanelProps) => {
  return (
    <Container>
      <BasePanel>{children}</BasePanel>
    </Container>
  );
};
