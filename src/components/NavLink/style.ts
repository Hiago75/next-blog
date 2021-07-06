import styled, { css } from 'styled-components';

export const NavItem = styled.li`
  ${({ theme }) => css`
    height: 100%;
    list-style-type: none;
    margin: 0 30px;
    display: flex;
    align-items: center;
    cursor: pointer;

    a {
      color: ${theme.font.colors.tertiary};
      text-decoration: none;
    }

    &.active {
      border-bottom: 1px solid ${theme.colors.secondary};
      font-weight: bold;
      a {
        color: #ffffff;
      }
    }

    &:hover {
      border-bottom: 1px solid ${theme.colors.secondary};

      a {
        color: #ffffff;
      }
    }
  `}
`;