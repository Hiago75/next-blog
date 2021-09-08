import Image from 'next/image';

import { logoutRequest } from '../../services/auth/logoutRequest';

import { NavLink } from '..';
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
