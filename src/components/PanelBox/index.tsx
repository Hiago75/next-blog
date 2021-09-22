import { ContentPanel, PanelTitle, Content } from './style';

interface PanelBoxRequest {
  panelTitle?: string;
  className?: string;
  widthPercentage?: number;
  contentClassName?: string;
  children: React.ReactNode;
}

export const PanelBox = ({
  panelTitle,
  className,
  widthPercentage,
  contentClassName,
  children,
}: PanelBoxRequest) => {
  return (
    <ContentPanel className={className} style={{ width: `calc(${widthPercentage}% - 20px)` }}>
      <PanelTitle>{panelTitle}</PanelTitle>
      <Content className={contentClassName}>{children}</Content>
    </ContentPanel>
  );
};
