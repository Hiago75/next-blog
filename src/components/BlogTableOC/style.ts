import styled from 'styled-components';

export const Container = styled.div``;

export const GuideSidebarLi = styled.li<{ index: number }>`
  color: ${({ theme }) => theme.fonts.smothFont};
  list-style: none;
  margin-bottom: 25px;
  transform: translateX(-30px);
  transition-property: opacity transform;
  transition: 0.2s ease;
  transition-delay: ${(props) => props.index * 100}ms;
  opacity: 0;

  ${Container}.is-visible & {
    opacity: 1;
    transform: translateX(0px);
  }

  &.active {
    color: ${({ theme }) => theme.colors.contrastColor};
    font-weight: bold;
    padding-left: 10px;
  }

  @media (max-width: 1024px) {
    padding: 0 10px;
    opacity: 1;
    transform: translateX(0px);

    &.active {
      font-weight: normal;
      transform: translateX(0px);
    }
  }
`;

export const GuideSidebarLink = styled.a`
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.fonts.lightSmothFont};
  }

  @media (max-width: 1024px) {
    color: ${({ theme }) => theme.colors.contrastColor};
  }
`;
