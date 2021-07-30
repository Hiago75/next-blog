import Image from 'next/image';

import { IUser } from '../../interfaces/IUser';
import { logout } from '../../utils/logout';

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

interface SidebarRequest {
  user: IUser;
}

export const Sidebar = ({ user }: SidebarRequest) => {
  function handleLogout() {
    logout();
  }

  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" alt="Colster" width={180} height={80} />
      </Logo>

      <User>
        <UserPic></UserPic>
        <UserName>{user?.name}</UserName>
        <UserRole>Desenvolvedor</UserRole>
      </User>

      <Navigation>
        <NavItem>
          <SideNavLink href="/admin/dashboard">Painel de controle</SideNavLink>
          <p>Página inicial</p>
        </NavItem>
        <SideNavLink href="/cadastro">Cadastro</SideNavLink>
      </Navigation>

      <LogOff onClick={handleLogout}>Sair</LogOff>
    </Container>
  );
};
