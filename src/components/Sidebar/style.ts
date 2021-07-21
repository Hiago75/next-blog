import styled, { css } from 'styled-components';
import { NavLink } from '../NavLink/';

export const Container = styled.header`
  height: 100vh;
  background-color: ${({ theme }) => theme.panel.colors.secondary};
  width: 250px;
  text-align: center;
`;

export const Logo = styled.div`
  text-align: center;
  margin: 60px 0;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserPic = styled.span`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: lightcyan;
  margin-bottom: 10px;
`;

export const UserName = styled.h2`
  ${({ theme }) => css`
    color: ${theme.panel.font.colors.primary};
    font-size: ${theme.panel.font.sizes.regular};
  `}
`;

export const UserRole = styled.p`
  ${({ theme }) => css`
    color ${theme.panel.font.colors.secondary};
    letter-spacing: 1px;
    padding: 3px 0;
  `}
`;

export const Navigation = styled.nav`
  margin: 30px 0;
`;

export const SideNavLink = styled(NavLink)`
  ${({ theme }) => css`
    margin: 2px;
    line-height: 35px;

    a {
      color: ${theme.panel.font.colors.primary} !important;
      width: 100%;
      text-align: left;
      margin: 0 10px;
    }

    &.active {
      border: 0;
      border-left: 2px solid ${theme.colors.secondary};
      font-weight: bold;
      a {
        color: #ffffff;
      }
    }
  `}
`;

export const NavItem = styled.div`
  ${({ theme }) => css`
    text-align: left;
    p {
      width: 80%;
      border-top: 2px solid ${theme.panel.font.colors.secondary};
      margin: 0 20px;
      padding: 15px 0;
      color: ${theme.panel.font.colors.secondary};
    }
  `}
`;

export const LogOff = styled.button`
  ${({ theme }) => css`
    border: 0;
    color: ${theme.panel.font.colors.secondary};
    font-size: 20px;
    background-color: ${theme.panel.colors.primary};
    padding: 5px 30px;
    cursor: pointer;

    &:hover{
      color ${theme.panel.font.colors.primary}
    }
  `}
`;
