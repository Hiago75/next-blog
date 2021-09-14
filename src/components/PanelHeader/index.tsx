import Link from 'next/link';
import { UserImage } from '..';

import { IconContext } from 'react-icons';
import { BsBellFill } from 'react-icons/bs';
import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from 'styled-components';
import { MenuController } from '..';
import { Container, UserInfo, Message, UserBar, NotificationBall, Notifications } from './style';

import { IUser } from '../../interfaces/IUser';
import { Dispatch, SetStateAction, useContext } from 'react';

interface PanelHeaderProps {
  message?: string;
  user: IUser;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
  theme: string;
  toggleTheme: () => void;
}

export const PanelHeader = ({
  user,
  message,
  setMenuOpen,
  menuOpen,
  theme,
  toggleTheme,
}: PanelHeaderProps) => {
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <MenuController setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <UserInfo>
        <Message>{message || `Olá, ${user?.name.split(' ')[0]}!`}</Message>
      </UserInfo>
      <UserBar>
        <IconContext.Provider value={{ size: '24', color: themeContext.fonts.primaryFont }}>
          <Notifications>
            <BsBellFill></BsBellFill>
            <NotificationBall>1</NotificationBall>
          </Notifications>
          {/* Change the icon depending on theme */}
          {theme === 'dark' ? (
            <FaSun onClick={toggleTheme}></FaSun>
          ) : (
            <FaMoon onClick={toggleTheme}></FaMoon>
          )}
          <Link href="/admin/dashboard/profile">
            <UserImage user={user} iconSize={45} imageSize="45px"></UserImage>
          </Link>
        </IconContext.Provider>
      </UserBar>
    </Container>
  );
};
