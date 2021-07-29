import Image from 'next/image';
import Router from 'next/router';

import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { destroyCookie } from 'nookies';

import {
  Container,
  Logo,
  User,
  UserPic,
  UserName,
  UserRole,
  Navigation,
  SideNavLink,
  LogOff,
  NavItem,
} from './style';

export const Sidebar = () => {
  const { user } = useContext(AuthContext);

  function handleLogout() {
    destroyCookie(undefined, 'nextblog.auth');
    Router.push('/admin');
  }

  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" alt="Colster" width={180} height={80} />
      </Logo>

      <User>
        <UserPic></UserPic>
        <UserName>Hiago Brenha</UserName>
        <UserRole>Desenvolvedor</UserRole>
      </User>

      <Navigation>
        <NavItem>
          <SideNavLink href="/">
            <a>Painel de controle</a>
          </SideNavLink>
          <p>Página inicial</p>
        </NavItem>
        <SideNavLink href="/cadastro">
          <a>Cadastro</a>
        </SideNavLink>
      </Navigation>

      <LogOff onClick={handleLogout}>Sair</LogOff>
    </Container>
  );
};
