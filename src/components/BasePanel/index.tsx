import { Panel } from './style';

type BasePanelProps = {
  children: React.ReactNode;
  className?: string;
};

export const BasePanel = ({ children, className }: BasePanelProps) => {
  return <Panel className={className}>{children}</Panel>;
};
