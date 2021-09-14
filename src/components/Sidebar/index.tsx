import { logoutRequest } from '../../services/auth/logoutRequest';
import Link from 'next/link';

import { NavLink, MenuController } from '..';
import { IconContext } from 'react-icons';
import { BiLogOut } from 'react-icons/bi';
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineFileAdd,
  AiFillFileAdd,
} from 'react-icons/ai';
import { RiUserLine, RiUserFill } from 'react-icons/ri';
import { Container, LogoBox, NavItems, Logout } from './style';
import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';

interface SidebarRequest {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ menuOpen, setMenuOpen }: SidebarRequest) => {
  //Logout the user
  function handleLogout() {
    logoutRequest();
  }

  return (
    <Container className={menuOpen ? ' menu-open' : ''}>
      <LogoBox>
        <Link href="/admin/dashboard">
          <img
            className="full-logo"
            src="/logo.svg"
            alt="Logo da Colster"
            width={180}
            height={100}
          />
        </Link>

        {/* Show the menu icon if the mobile menu is open */}
        {menuOpen && <MenuController setMenuOpen={setMenuOpen} menuOpen={menuOpen} />}

        <Link href="/admin/dashboard">
          <img className="min-logo" src="/colster-reduzido.svg" alt="Logo da Colster reduzida" />
        </Link>
      </LogoBox>
      <IconContext.Provider value={{ size: '26', color: '#5A8BD6' }}>
        <NavItems>
          <ul>
            <NavLink
              outlineIcon={<AiOutlineHome />}
              filledIcon={<AiFillHome />}
              href="/admin/dashboard"
              exact
              className="sidebar"
            >
              Página Inicial
            </NavLink>
            <NavLink
              outlineIcon={<RiUserLine />}
              filledIcon={<RiUserFill />}
              href="/admin/dashboard/profile"
              className="sidebar"
            >
              Meu perfil
            </NavLink>
            <NavLink
              outlineIcon={<AiOutlineFileAdd />}
              filledIcon={<AiFillFileAdd />}
              href="/admin/dashboard/posts"
              className="sidebar"
            >
              Posts
            </NavLink>
            <NavLink
              outlineIcon={<AiOutlineUnorderedList />}
              filledIcon={<AiOutlineOrderedList />}
              href="/admin/dashboard/categories"
              className="sidebar"
            >
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
