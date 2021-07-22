import { Panel } from './style';

type BasePanelProps = {
  children: React.ReactNode;
};

export const BasePanel = ({ children }: BasePanelProps) => {
  return <Panel>{children}</Panel>;
};
