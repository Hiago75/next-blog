import styled from 'styled-components';

export const LogoBox = styled.div`
  text-align: center;
  margin: 20px 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  max-height: 15%;

  & img {
    cursor: pointer;
  }
  & img.min-logo {
    margin: 25px 0;
  }
`;

export const Container = styled.aside`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  transition: background-color 0.3s ease;
  width: 90px;
  transition: width 0.2s ease-in-out;
  position: fixed;
  overflow: hidden;
  z-index: 7;
  padding-right: 5px;

  a,
  span {
    display: none;
  }

  li {
    display: flex;
    justify-content: center;
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
    padding-right: 0;

    &.menu-open {
      width: 100%;

      & a,
      li,
      span {
        display: inline-block;
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

export const SidebarItems = styled.div`
  height: 90%;
`;

export const SidebarNav = styled.nav`
  overflow-y: auto;
  max-height: 75%;
  margin-bottom: 10px;
`;

export const SidebarUl = styled.ul``;

export const SidebarFooter = styled.div`
  z-index: 99;
  position: inline-block;
  max-height: 10%;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
`;

export const Logout = styled.div`
  bottom: 30px;
  width: 100%;
  text-align: center;
  height: 50px;

  svg {
    cursor: pointer;
  }
`;
