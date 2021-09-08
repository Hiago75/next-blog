import Image from 'next/image';

import { logoutRequest } from '../../services/auth/logoutRequest';

import { NavLink } from '..';
import { IconContext } from 'react-icons';
import { BiLogOut } from 'react-icons/bi';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineUnorderedList,
  AiOutlineFileAdd,
} from 'react-icons/ai';
import { Container, LogoBox, NavItems, Logout } from './style';

export const Sidebar = () => {
  function handleLogout() {
    logoutRequest();
  }

  return (
    <Container>
      <LogoBox>
        <Image src="/logo.svg" alt="Colster" width={180} height={100} />
      </LogoBox>
      <IconContext.Provider value={{ size: '26', color: '#5A8BD6' }}>
        <NavItems>
          <ul>
            <NavLink href="/admin/dashboard" exact className="sidebar">
              <AiOutlineHome />
              Página Inicial
            </NavLink>
            <NavLink href="/admin/dashboard/profile" className="sidebar">
              <AiOutlineUser />
              Meu perfil
            </NavLink>
            <NavLink href="/admin/dashboard/posts" className="sidebar">
              <AiOutlineFileAdd />
              Posts
            </NavLink>
            <NavLink href="/admin/dashboard/categories" className="sidebar">
              <AiOutlineUnorderedList />
              Categorias
            </NavLink>
          </ul>
        </NavItems>

        <Logout>
          <BiLogOut size={32} color="#5A8BD6" onClick={handleLogout}></BiLogOut>
        </Logout>
      </IconContext.Provider>
    </Container>
  );
};
