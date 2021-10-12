import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from 'styled-components';
import { PostCategory } from '../../domain/posts/post';
import { IContainerRequest } from '../../interfaces/IContainerRequest';

import {
  BlogHeader,
  HeaderContainer,
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

interface IBlogHeaderRequest extends IContainerRequest {
  data: PostCategory[];
  progressBar?: boolean;
  currentProgress?: number;
}

export const Header = ({
  data,
  currentProgress,
  progressBar,
  theme,
  toggleTheme,
}: IBlogHeaderRequest) => {
  const cssTheme = useContext(ThemeContext);

  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const headerClassList = handleHeaderClassList();
  const menuClassList = isOpen ? 'active' : undefined;

  // Toggle mobile menu state
  function toggleMobileMenu() {
    setIsOpen(!isOpen);
  }

  function handleHeaderClassList() {
    let classList = '';
    classList += ' progress-bar';
    isFixed ? (classList += ' fixed') : undefined;

    return classList;
  }

  // Toggle the theme
  function handleThemeChangeClick() {
    toggleTheme();
  }

  function listenScrollEvent() {
    if (window.scrollY > 30) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  }

  //When the component mount...
  useEffect(() => {
    //Add a scroll listener to know when to active the fixed style
    window.addEventListener('scroll', listenScrollEvent);
    data.length = 5;

    //Remove the scroll listener when component unmounts
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);

  return (
    <BlogHeader className={headerClassList} currentProgress={progressBar ? currentProgress : 0}>
      <HeaderContainer>
        <DesktopNav>
          <Link href="/">
            <LogoBox>
              {isFixed ? <Logo src="/logo-min.svg" /> : <Logo src="/logo.svg" />}
              <span>Blog</span>
            </LogoBox>
          </Link>

          <HeaderUl>
            <HeaderLi>
              <Link href="/" passHref>
                <HeaderLink>Home</HeaderLink>
              </Link>
            </HeaderLi>
            {data?.map((category) => (
              <HeaderLi key={category.name}>
                <Link href={`/posts/${category.name}`} passHref>
                  <HeaderLink>{category.name}</HeaderLink>
                </Link>
              </HeaderLi>
            ))}
          </HeaderUl>
        </DesktopNav>

        <MobileHamburger className={menuClassList} onClick={toggleMobileMenu}>
          <span className="upperBar" />
          <span className="lowerBar" />
        </MobileHamburger>

        <MobileNav>
          <Link href="/">
            <LogoBox>
              <Logo src="/logo-min.svg" />
              <span>Blog</span>
            </LogoBox>
          </Link>

          <HeaderUl className={menuClassList}>
            <HeaderLi className={menuClassList}>
              <Link href="/" passHref>
                <HeaderLink>Home</HeaderLink>
              </Link>
            </HeaderLi>
            {data?.map((category, index) => (
              <HeaderLi index={index} className={menuClassList} key={category.name}>
                <Link href={`/posts/${category.name}`} passHref>
                  <HeaderLink>{category.name}</HeaderLink>
                </Link>
              </HeaderLi>
            ))}
          </HeaderUl>
        </MobileNav>

        <HeaderActions>
          {theme === 'light' ? (
            <FaMoon onClick={handleThemeChangeClick} color={cssTheme.fonts.primaryFont} size={32} />
          ) : (
            <FaSun onClick={handleThemeChangeClick} color={cssTheme.fonts.primaryFont} size={32} />
          )}
        </HeaderActions>
      </HeaderContainer>
    </BlogHeader>
  );
};
