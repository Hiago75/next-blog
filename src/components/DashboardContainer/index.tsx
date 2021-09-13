import Head from 'next/head';
import { useState, useContext } from 'react';

import { Sidebar, Loading, PanelHeader } from '..';
import { AuthContext } from '../../contexts/AuthContext';
import { Container, Content } from './style';

export interface PanelProps {
  headerMessage?: string;
  children: React.ReactNode;
}

export const DashboardContainer = ({ headerMessage, children }: PanelProps) => {
  const { user, isRetrievingUserData, refreshUserData, isAuthenticated } = useContext(AuthContext);

  const [menuOpen, setMenuOpen] = useState(false);

  if (isAuthenticated && !user) {
    refreshUserData(true);
  }

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
      />
      <Content className="menu-open">{children}</Content>
    </Container>
  );
};
