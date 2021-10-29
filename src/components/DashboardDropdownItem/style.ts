import styled, { css } from 'styled-components';
import Link from 'next/link';

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
    overflow: hidden;
    font-size: 15px;

    &.active {
      color: ${theme.fonts.primaryFont};
      font-weight: bold;
    }
  `}
`;
