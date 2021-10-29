import styled, { css } from 'styled-components';

export const SidebarLinkContainer = styled.div`
  min-height: 75px;
  display: flex;
  flex-wrap: wrap;
`;

export const SidebarList = styled.li`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  cursor: pointer;
  border-left: 0;
  transition: border-left 0.2s ease-in-out;
  list-style: none;
  position: relative;

  svg {
    position: relative;
    top: 3px;
    margin: 0 15px;
  }

  span {
    position: absolute;
    top: 18px;
    right: 10px;
  }

  &:hover,
  &.active {
    border-left: 3px solid ${({ theme }) => theme.colors.contrastColor};
  }
`;

export const SidebarLabel = styled.a`
  ${({ theme }) => css`
    color: ${theme.fonts.smothFont};
    display: block;
    font-size: 15px;
    position: relative;
    bottom: 2px;

    &.active {
      color: ${theme.fonts.primaryFont};
    }
  `}
`;
