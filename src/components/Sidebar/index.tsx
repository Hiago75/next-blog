import Image from 'next/image';
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

      <LogOff>Sair</LogOff>
    </Container>
  );
};
