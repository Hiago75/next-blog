import Image from 'next/image';

import { IUser } from '../../interfaces/IUser';
import { logoutUser } from '../../utils/logoutUser';

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

import { FaUserAlt } from 'react-icons/fa';

interface SidebarRequest {
  user: IUser;
}

export const Sidebar = ({ user }: SidebarRequest) => {
  function handleLogout() {
    logoutUser();
  }

  return (
    <Container>
      <Logo>
        <Image src="/logo.svg" alt="Colster" width={180} height={80} />
      </Logo>

      <User>
        <UserPic>
          {user?.profilePhotoUrl ? (
            <img src={user.profilePhotoUrl}></img>
          ) : (
            <FaUserAlt size="80" color={'#1c1f26'} />
          )}
        </UserPic>
        <UserName>{user?.name}</UserName>
        <UserRole>{user?.admin === true ? 'Desenvolvedor(a)' : 'Autor(a)'}</UserRole>
      </User>

      {/* TODO: Show more options when active */}
      <Navigation>
        <NavItem>
          <SideNavLink href="/admin/dashboard" exact>
            Painel de controle
          </SideNavLink>
          <p>Página inicial</p>
        </NavItem>
        <SideNavLink href="/admin/dashboard/edit">Editar perfil</SideNavLink>
      </Navigation>

      <LogOff onClick={handleLogout}>Sair</LogOff>
    </Container>
  );
};
