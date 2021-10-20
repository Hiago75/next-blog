import styled, { css } from 'styled-components';

export const BlogHeader = styled.header<{ currentProgress: number }>`
  width: 100%;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  border-bottom: ${({ theme }) => theme.colors.mainBackground};
  top: -1px;
  z-index: 9999;
  transition: background-color 0.2s ease;
  -webkit-box-shadow: 0px 4px 18px -1px rgb(0 0 0 / 23%);
  box-shadow: 0px 4px 18px -1px rgb(0 0 0 / 23%);

  &.progress-bar {
    :after {
      content: '';
      position: fixed;
      transition: width 0.1s ease;
      width: ${(props) => props.currentProgress || 0}%;
      height: 2px;
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.contrastColor};
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  max-width: 1200px;
  margin: 0 auto;

  ${BlogHeader}.fixed & {
    padding: 10px 25px;
  }
`;

//Logo
export const LogoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-right: 30px;
    cursor: pointer;

    span {
      padding: 3px 10px;
      background-color: ${theme.colors.contrastColor};
      margin-left: 20px;
      border-radius: 10px;
      font-size: 20px;
      color: white;

      @media (max-width: 768px) {
        display: none;
      }
    }
  `}

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: auto;
  transition: width 0.3s ease;

  @media (max-width: 768px) {
    width: 60px;
  }

  ${BlogHeader}.fixed & {
    width: 60px;
  }
`;

//Desktop Nav
export const DesktopNav = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderUl = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 67px;
    width: 100%;
    height: 0px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.alternativeBackground};
    z-index: 99;
    left: 0%;
    transition: height 0.3s ease-in-out;
    justify-content: space-evenly;
    text-align: center;
    overflow-y: hidden;

    &.active {
      height: calc(100vh - 67px);
    }
  }
`;

export const HeaderLi = styled.li<{ index?: number }>`
  list-style: none;
  display: inline-block;
  margin: 0 20px;

  @media (max-width: 768px) {
    margin: 0;
    opacity: 0;
    transform: translateY(-50px);
    transition-property: opacity transform;
    transition: 0.4s ease;
    transition-delay: ${(props) => props.index} * 0.2s;

    &.active {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.fonts.smothFont};
  font-size: 17px;

  &:hover {
    color: ${({ theme }) => theme.fonts.primaryFont};
  }

  @media (max-width: 768px) {
    display: block;
    padding: 15px;
    height: 100%;
    width: 100%;
  }
`;

//Mobile Nav
export const MobileNav = styled.nav`
  display: none;

  @media (max-width: 768px) {
    display: flex;

    ${BlogHeader}.fixed & {
      padding: 10px 25px;
    }
  }
`;

//Header actions
export const HeaderActions = styled.div`
  svg {
    cursor: pointer;
  }
`;

export const MobileHamburger = styled.div`
  position: relative;
  display: none;
  cursor: pointer;
  height: 15px;
  transition: transform 300ms ease;

  & span {
    height: 2px;
    background: ${({ theme }) => theme.fonts.primaryFont};
    display: block;
    transition: 300ms ease;
    transform-origin: center;
  }

  & span.upperBar {
    width: 30px;
    transition-property: transform;
  }

  & span.lowerBar {
    width: 20px;
    position: relative;
    top: 10px;
    transition-property: transform width;
  }

  &.active {
    transform: translateX(-8px);

    span.upperBar {
      transform: rotate(50deg) translate(9px);
    }

    span.lowerBar {
      transform: rotate(-50deg) translate(7px, 1px);
      width: 30px;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
