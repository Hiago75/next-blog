import { useState } from 'react';

import { IconContext } from 'react-icons';
import { BsBellFill } from 'react-icons/bs';
import { FaSun, FaMoon } from 'react-icons/fa';

import { ThemeContext } from 'styled-components';
import { MenuController, UserImage } from '..';
import {
  Container,
  UserInfo,
  Message,
  UserBar,
  NotificationBall,
  Notifications,
  NotificationBox,
  Notification,
  NotificationText,
  NotificationStatus,
  NotificationNotVisualized,
  UserImageBox,
} from './style';

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
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // TODO: Add real notification system
  const notifications = [];

  // Toggle the notification box between open and close
  function handleNotificationOpen() {
    setNotificationsOpen(!notificationsOpen);
  }

  return (
    <Container>
      <MenuController setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <UserInfo>
        {/* Display the users name or the sent message */}
        <Message>{message || `Olá, ${user?.name.split(' ')[0]}!`}</Message>
      </UserInfo>
      <UserBar>
        {/* Provides the default style for the icons inside this tag */}
        <IconContext.Provider value={{ size: '24', color: themeContext.fonts.primaryFont }}>
          {/* Notifications */}
          <Notifications>
            <BsBellFill onClick={handleNotificationOpen}></BsBellFill>
            {notifications.length > 0 && (
              <NotificationBall className="unselectable">
                <p>{notifications.length}</p>
              </NotificationBall>
            )}
          </Notifications>

          {/* Change the icon depending on theme */}
          {/* TODO: save the user preference */}
          {theme === 'dark' ? (
            <FaSun onClick={toggleTheme}></FaSun>
          ) : (
            <FaMoon onClick={toggleTheme}></FaMoon>
          )}
          <UserImageBox>
            <UserImage user={user} imageSize={50}></UserImage>
          </UserImageBox>
        </IconContext.Provider>
      </UserBar>

      <NotificationBox className={notificationsOpen ? 'open' : ''}>
        <h1 className="unselectable">Notificações</h1>
        {notifications.length > 0 &&
          notifications.map((notification) => {
            return (
              <Notification className="unselectable" key={notification.id}>
                <NotificationText>
                  <h2>
                    <b>{notification.who}</b> {notification.title}
                  </h2>
                  <p className="notification-date">{notification.date}</p>
                </NotificationText>
                {!notification.visualized && (
                  <NotificationStatus>
                    <NotificationNotVisualized />
                  </NotificationStatus>
                )}
              </Notification>
            );
          })}

        {notifications.length <= 0 && (
          <p>
            Opa, parece que não tem nada novo para você... Quando algo interessante acontecer vai
            aparecer aqui
          </p>
        )}
      </NotificationBox>
    </Container>
  );
};
