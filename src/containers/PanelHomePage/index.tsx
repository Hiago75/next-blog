import { PanelHeader } from '../../components';
import { IUser } from '../../interfaces/IUser';

interface PanelHomePageProps {
  user: IUser;
}

export const PanelHomePage = ({ user }: PanelHomePageProps) => {
  return (
    <>
      <PanelHeader user={user} />
    </>
  );
};
