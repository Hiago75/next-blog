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
      color: ${theme.fonts.smothFont};
      position: relative;
      text-decoration: none;
      top: 5px;
    }

    &.active {
      border-bottom: 1px solid ${theme.colors.contrastColor};
      font-weight: bold;

      a {
        color: ${({ theme }) => theme.fonts.primaryFont};
      }
    }

    &:hover {
      border-bottom: 1px solid ${theme.colors.contrastColor};

      a {
        color: ${({ theme }) => theme.fonts.primaryFont};
      }
    }
  `}
`;
