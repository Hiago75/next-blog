import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 4%;
`;

export const MainHeader = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-bottom: 1px solid ${theme.colors.borders.darkGray};
    height: 60px;
  `}
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.font.colors.primary};
  text-decoration: none;
  font-size: 25px;
  transition: opacity 200ms ease;
  cursor: pointer;
`;

export const DesktopMenu = styled.nav`
  height: 100%;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.nav`
  display: none;
  position: relative;
  z-index: 10;
  cursor: pointer;

  ul {
    padding: 10px 0;
    background-color: ${({ theme }) => theme.colors.primary};
    display: none;
  }

  li {
    padding: 20px 0;
    margin: 0 4%;
  }

  &.active {
    & ul {
      display: block;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileHamburger = styled.span`
  position: relative;
  bottom: 6px;
  display: none;
  cursor: pointer;

  &:before {
    content: '';
    width: 20px;
    top: 8px;
    left: 20px;
    height: 2px;
    display: inline-block;
    background: white;
    position: relative;
    transition-property: transform width;
    transition: 300ms ease;
  }

  &:after {
    content: '';
    width: 30px;
    top: -2px;
    height: 2px;
    display: inline-block;
    background: white;
    position: relative;
    transition: transform 300ms ease;
  }

  &.active {
    &:before {
      transform: rotate(-50deg) translateX(13px);
      width: 30px;
    }

    &:after {
      transform: rotate(50deg);
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
