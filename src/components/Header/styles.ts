import styled, { css } from 'styled-components';

export const MainHeader = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-bottom: 1px solid ${theme.colors.borders.darkGray};
    height: 60px;

    nav {
      height: 100%;
      ul {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
    }
  `}
`;

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 2%;
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.font.colors.primary};
  text-decoration: none;
  font-size: 25px;
  transition: opacity 200ms ease;
  cursor: pointer;
`;
