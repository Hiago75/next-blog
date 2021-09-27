import styled, { css } from 'styled-components';
import Link from 'next/link';

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

  svg {
    position: relative;
    top: 3px;
    margin: 0 15px;
  }

  span {
    position: relative;
    top: 4px;
    left: 45px;
  }

  &:hover,
  &.active {
    border-left: 3px solid ${({ theme }) => theme.colors.contrastColor};
  }
`;

export const SidebarLabel = styled.a`
  ${({ theme }) => css`
    color: ${theme.fonts.smothFont};
    font-size: 17px;
    position: relative;
    bottom: 2px;

    &.active {
      font-weight: bold;
      color: ${theme.fonts.primaryFont};
    }
  `}
`;

/* Dropdown */

export const DropdownLink = styled(Link)``;

export const DropdownLinkContainer = styled.div`
  width: calc(100% - 30px);
  cursor: pointer;

  &:hover {
    a {
      color: ${({ theme }) => theme.fonts.primaryFont};
    }
  }
`;

export const DropdownLabel = styled.a`
  ${({ theme }) => css`
    color: ${theme.fonts.smothFont};
    padding: 10px 0;
    padding-left: 45px;
    margin-bottom: 5px;

    &.active {
      color: ${theme.fonts.primaryFont};
      font-weight: bold;
    }
  `}
`;
