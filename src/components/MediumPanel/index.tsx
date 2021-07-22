import { Container } from './style';
import { BasePanel } from '../BasePanel';

type MediumPanelProps = {
  children: React.ReactNode;
};

export const MediumPanel = ({ children }: MediumPanelProps) => {
  return (
    <Container>
      <BasePanel>{children}</BasePanel>
    </Container>
  );
};
