import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

import { IconContext } from 'react-icons';
import { BiLogOut } from 'react-icons/bi';

import { MenuController, SubMenu } from '..';
import {
  Container,
  LogoBox,
  SidebarNav,
  SidebarUl,
  Logout,
  SidebarItems,
  SidebarFooter,
} from './style';
import { logoutUser } from '../../utils/logoutUser';
import { SidebarData } from './sidebarData';

interface SidebarRequest {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const Sidebar = ({ menuOpen, setMenuOpen }: SidebarRequest) => {
  //Logout the user
  function handleLogout() {
    logoutUser();
  }

  return (
    <Container className={menuOpen ? ' menu-open' : ''}>
      <IconContext.Provider value={{ size: '28', color: '#5A8BD6' }}>
        <SidebarItems>
          <LogoBox>
            <Link href="/cboard">
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

            <Link href="/cboard">
              <img
                className="min-logo"
                src="/colster-reduzido.svg"
                alt="Logo da Colster reduzida"
              />
            </Link>
          </LogoBox>

          <SidebarNav>
            <SidebarUl>
              {SidebarData.map((item, index) => (
                <SubMenu item={item} key={index}></SubMenu>
              ))}
            </SidebarUl>
          </SidebarNav>
        </SidebarItems>

        <SidebarFooter>
          <Logout>
            <BiLogOut size={32} onClick={handleLogout}></BiLogOut>
          </Logout>
        </SidebarFooter>
      </IconContext.Provider>
    </Container>
  );
};
