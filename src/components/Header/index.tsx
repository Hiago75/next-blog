import Link from 'next/link';
import { useState, useContext } from 'react';
import { MdWbSunny } from 'react-icons/md';
import { ThemeContext } from 'styled-components';

import {
  Container,
  LogoBox,
  Logo,
  DesktopNav,
  HeaderUl,
  HeaderLi,
  HeaderLink,
  HeaderActions,
  MobileNav,
  MobileHamburger,
} from './styles';

export const Header = () => {
  const theme = useContext(ThemeContext);

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const menuClassList = isOpen ? 'active' : undefined;

  // Toggle mobile menu state
  function handleMobileMenu() {
    setIsOpen(!isOpen);
  }

  // Toggle the theme
  function handleThemeChangeClick() {
    alert('Tema trocado');
  }

  return (
    <Container>
      <DesktopNav>
        <Link href="/">
          <LogoBox>
            <Logo src="/logo.svg" />
            <span>Blog</span>
          </LogoBox>
        </Link>

        <HeaderUl>
          <HeaderLi>
            <Link href="#" passHref>
              <HeaderLink>Front-end</HeaderLink>
            </Link>
          </HeaderLi>
          <HeaderLi>
            <Link href="#" passHref>
              <HeaderLink>Back-end</HeaderLink>
            </Link>
          </HeaderLi>
          <HeaderLi>
            <Link href="#" passHref>
              <HeaderLink>Marketing</HeaderLink>
            </Link>
          </HeaderLi>
        </HeaderUl>
      </DesktopNav>

      <MobileHamburger className={menuClassList} onClick={handleMobileMenu}>
        <span className="upperBar" />
        <span className="lowerBar" />
      </MobileHamburger>

      <MobileNav>
        <Link href="/">
          <LogoBox>
            <Logo src="/colster-reduzido.svg" />
            <span>Blog</span>
          </LogoBox>
        </Link>

        <HeaderUl className={menuClassList}>
          <HeaderLi className={`${menuClassList} `}>
            <Link href="#" passHref>
              <HeaderLink>Front-end</HeaderLink>
            </Link>
          </HeaderLi>
          <HeaderLi className={`${menuClassList}`}>
            <Link href="#" passHref>
              <HeaderLink>Back-end</HeaderLink>
            </Link>
          </HeaderLi>
          <HeaderLi className={`${menuClassList}`}>
            <Link href="#" passHref>
              <HeaderLink>Marketing</HeaderLink>
            </Link>
          </HeaderLi>
        </HeaderUl>
      </MobileNav>

      <HeaderActions>
        <MdWbSunny onClick={handleThemeChangeClick} color={theme.fonts.primaryFont} size={32} />
      </HeaderActions>
    </Container>
  );
};
