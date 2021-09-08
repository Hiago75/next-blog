import styled, { css } from 'styled-components';

export const NavItem = styled.li`
  ${({ theme }) => css`
    height: 100%;
    list-style-type: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      margin: 0 15px;
    }

    a {
      color: ${theme.font.colors.lightGray};
      position: relative;
      text-decoration: none;
      top: 5px;
    }

    &.active {
      border-bottom: 1px solid ${theme.colors.mediumBlue};
      font-weight: bold;
      a {
        color: #ffffff;
      }
    }

    &:hover {
      border-bottom: 1px solid ${theme.colors.mediumBlue};

      a {
        color: #ffffff;
      }
    }
  `}
`;
