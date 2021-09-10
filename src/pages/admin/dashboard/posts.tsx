import { PanelPosts } from '../../../containers';
import { DashboardContainer } from '../../../components';

export default function AdminPosts() {
  return (
    <DashboardContainer headerMessage="Criação de post">
      <PanelPosts />
    </DashboardContainer>
  );
}
