import styled from 'styled-components';

export const LogoBox = styled.div`
  text-align: center;
  margin: 20px 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;

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

  a,
  span {
    display: none;
  }

  li {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
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

    a,
    li,
    span {
      display: inline-block;
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

export const SidebarNav = styled.nav``;

export const SidebarUl = styled.ul``;

export const Logout = styled.div`
  position: absolute;
  bottom: 30px;
  width: 100%;
  text-align: center;
  svg {
    cursor: pointer;
  }
`;
