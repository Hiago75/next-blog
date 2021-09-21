import Head from 'next/head';
import { useState, useContext } from 'react';

import { Sidebar, Loading, PanelHeader } from '..';
import { AuthContext } from '../../contexts/AuthContext';
import { logoutUser } from '../../utils/logoutUser';
import { Container, Content } from './style';

export interface PanelProps {
  headerMessage?: string;
  children: React.ReactNode;
  theme: string;
  toggleTheme: () => void;
}

export const DashboardContainer = ({ headerMessage, children, theme, toggleTheme }: PanelProps) => {
  const { user, isRetrievingUserData, refreshUserData, isAuthenticated } = useContext(AuthContext);

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // refresh user data if this one is authenticated but has no data stored
  if (isAuthenticated && !user) {
    try {
      refreshUserData(true);
    } catch (e) {
      logoutUser();
    }
  }

  // Set the loading screen when retrieving user data
  if (isRetrievingUserData)
    return (
      <Loading>
        <h1>Espera só um pouquinho enquanto procuro seus dados</h1>
      </Loading>
    );

  return (
    <Container>
      <Head>
        <title>NextBlog | Admin</title>
      </Head>
      <Sidebar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <PanelHeader
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        message={headerMessage}
        user={user}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <Content className="menu-open">{children}</Content>
    </Container>
  );
};
