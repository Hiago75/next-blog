import styled, { css } from 'styled-components';
import { Content } from '../DashboardContainer/style';

export const LogoBox = styled.div`
  text-align: center;
  margin: 20px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  & img.min-logo {
    margin: 25px 0;
  }
`;

export const Container = styled.aside`
  height: 100vh;
  background-color: ${({ theme }) => theme.dashboard.dark.background};
  width: 90px;
  transition: width 0.2s ease-in-out;
  position: fixed;
  overflow-y: auto;
  z-index: 2;

  & a {
    display: none;
  }

  ${LogoBox} {
    & img.full-logo {
      display: none !important;
    }

    & img.min-logo {
      display: inline-block !important;
    }
  }

  &:hover {
    width: 205px;

    & a {
      display: block;
    }

    ${LogoBox} {
      & img.full-logo {
        display: inline-block !important;
      }

      & img.min-logo {
        display: none !important;
      }
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const NavItems = styled.nav`
  ${({ theme }) => css`
    li {
      &.sidebar {
        box-sizing: border-box;
        padding: 15px;
        margin: 20px 0;

        &.active,
        &:hover {
          border-left: 5px solid ${theme.dashboard.dark.lightBlue};
          border-bottom: 0;
          border-bottom: 0;
          a {
            color: #ffffff;
          }
        }

        &.active {
          font-weight: bold;
        }
      }
    }
  `};
`;

export const Logout = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
  svg {
    cursor: pointer;
  }
`;
