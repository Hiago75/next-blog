import { ContentPanel, PanelTitle, Content } from './style';

interface PanelBoxRequest {
  panelTitle?: string;
  className: string;
  contentClassName?: string;
  children: React.ReactNode;
}

export const PanelBox = ({
  panelTitle,
  className,
  contentClassName,
  children,
}: PanelBoxRequest) => {
  return (
    <ContentPanel className={className}>
      <PanelTitle>{panelTitle}</PanelTitle>
      <Content className={contentClassName}>{children}</Content>
    </ContentPanel>
  );
};
