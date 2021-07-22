import { Container } from './style';
import { BasePanel } from '../BasePanel';

type BigPanelProps = {
  children: React.ReactNode;
};

export const BigPanel = ({ children }: BigPanelProps) => {
  return (
    <Container>
      <BasePanel>{children}</BasePanel>
    </Container>
  );
};
