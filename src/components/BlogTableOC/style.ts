import styled from 'styled-components';

export const GuideSidebarLi = styled.li`
  color: ${({ theme }) => theme.fonts.smothFont};
  list-style: none;
  margin-bottom: 25px;

  &.active {
    color: ${({ theme }) => theme.colors.contrastColor};
  }
`;

export const GuideSidebarLink = styled.a`
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.fonts.lightSmothFont};
  }
`;
