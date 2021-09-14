import { PanelPosts } from '../../../containers';
import { DashboardContainer } from '../../../components';
import { IContainerRequest } from '../../../interfaces/IContainerRequest';

export default function AdminPosts({ theme, toggleTheme }: IContainerRequest) {
  return (
    <DashboardContainer toggleTheme={toggleTheme} theme={theme} headerMessage="Criação de post">
      <PanelPosts />
    </DashboardContainer>
  );
}
