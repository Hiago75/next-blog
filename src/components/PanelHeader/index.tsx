import { UserImage } from '..';

import { IconContext } from 'react-icons';
import { BsBellFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

import { Container, UserInfo, Message, UserBar, NotificationBall, Notifications } from './style';

import { IUser } from '../../interfaces/IUser';

interface PanelHeaderProps {
  user: IUser;
}

export const PanelHeader = ({ user }: PanelHeaderProps) => {
  return (
    <Container>
      <UserInfo>
        <Message>{`Olá, ${user?.name.split(' ')[0]}!`}</Message>
      </UserInfo>
      <UserBar>
        <IconContext.Provider value={{ size: '24', color: '#F9FBFF' }}>
          <Notifications>
            <BsBellFill></BsBellFill>
            <NotificationBall>1</NotificationBall>
          </Notifications>
          <FaSun></FaSun>
          <UserImage user={user} iconSize={45} imageSize="45px"></UserImage>
        </IconContext.Provider>
      </UserBar>
    </Container>
  );
};
