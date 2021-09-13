import { UserImage } from '..';

import { IconContext } from 'react-icons';
import { BsBellFill } from 'react-icons/bs';
import { FaSun } from 'react-icons/fa';

import { MenuController } from '..';
import { Container, UserInfo, Message, UserBar, NotificationBall, Notifications } from './style';

import { IUser } from '../../interfaces/IUser';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';

interface PanelHeaderProps {
  message?: string;
  user: IUser;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
}

export const PanelHeader = ({ user, message, setMenuOpen, menuOpen }: PanelHeaderProps) => {
  return (
    <Container>
      <MenuController setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <UserInfo>
        <Message>{message || `Olá, ${user?.name.split(' ')[0]}!`}</Message>
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
