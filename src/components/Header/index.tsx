import Link from 'next/link';

import { MainHeader, Container, Logo, MobileHamburger, MobileMenu, DesktopMenu } from './styles';
import { APP_NAME } from '../../config/';
import { NavLink } from '../';
import { useState } from 'react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function mobileMenuClick() {
    setIsOpen(!isOpen);
  }

  return (
    <MainHeader>
      <Container>
        <Link href="/">
          <Logo>{APP_NAME}</Logo>
        </Link>
        <DesktopMenu>
          <ul>
            <NavLink href="/" exact>
              Home
            </NavLink>

            <NavLink href="/posts/page/1/javascript" exact>
              JavaScript
            </NavLink>

            <NavLink href="/posts/page/1/typescript" exact>
              TypeScript
            </NavLink>

            <NavLink href="/posts/page/1/python" exact>
              Python
            </NavLink>
          </ul>
        </DesktopMenu>

        <MobileHamburger onClick={mobileMenuClick} className={isOpen ? 'active' : ''}>
          <span className="bar1" />
          <span className="bar2" />
        </MobileHamburger>
      </Container>

      <MobileMenu className={isOpen ? 'active' : ''} onClick={mobileMenuClick}>
        <ul>
          <NavLink href="/" exact>
            Home
          </NavLink>

          <NavLink href="/posts/page/1/javascript" exact>
            JavaScript
          </NavLink>

          <NavLink href="/posts/page/1/typescript" exact>
            TypeScript
          </NavLink>

          <NavLink href="/posts/page/1/python" exact>
            Python
          </NavLink>
        </ul>
      </MobileMenu>
    </MainHeader>
  );
};
