import Head from 'next/head';
import { useState, useContext } from 'react';

import { Sidebar, Loading, PanelHeader } from '..';
import { AuthContext } from '../../contexts/AuthContext';
import { RequestContext } from '../../contexts/RequestContext';
import { Container, Content } from './style';

export interface PanelProps {
  headerMessage?: string;
  children: React.ReactNode;
  theme: string;
  toggleTheme: () => void;
}

export const DashboardContainer = ({ headerMessage, children, theme, toggleTheme }: PanelProps) => {
  const { user, isRetrievingUserData } = useContext(AuthContext);
  const { isLoading } = useContext(RequestContext);

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

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
        <title>Colster Blog | Admin</title>
      </Head>

      {isLoading && <Loading></Loading>}

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
