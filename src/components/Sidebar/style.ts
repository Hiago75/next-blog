import styled, { css } from 'styled-components';

export const LogoBox = styled.div`
  text-align: center;
  margin: 20px 0 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    cursor: pointer;
  }
  & img.min-logo {
    margin: 25px 0;
  }
`;

export const Container = styled.aside`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  width: 90px;
  transition: width 0.2s ease-in-out;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 7;

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
    width: 0;

    &.menu-open {
      width: 100%;

      & a {
        display: block;
      }

      ${LogoBox} {
        display: flex;
        justify-content: space-around;
        & img.full-logo {
          display: inline-block !important;
        }

        & img.min-logo {
          display: none !important;
        }
      }
    }
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
          border-left: 5px solid ${theme.colors.contrastColor};
          border-bottom: 0;
          border-bottom: 0;
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
