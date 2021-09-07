import styled, { css } from 'styled-components';

export const Container = styled.header`
  height: 100vh;
  background-color: ${({ theme }) => theme.dashboard.dark.background};
  width: 250px;
  position: fixed;

  overflow-y: auto;

  &::-webkit-scrollbar {
    visibility: hidden;
    transition: visibility 0.2s;
  }

  &:hover {
    visibility: visible;
  }
`;

export const LogoBox = styled.div`
  text-align: center;
  margin: 20px 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const NavItems = styled.nav`
  ${({ theme }) => css`
    li {
      svg {
        position: relative;
        margin: 0 15px;
        top: 3px;
      }

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
