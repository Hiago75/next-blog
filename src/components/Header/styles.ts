import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 15px;
    text-align: center;
    border-bottom: 1px solid ${theme.colors.borders.darkGray};

    a {
      color: ${theme.font.colors.primary};
      text-decoration: none;
      font-size: 25px;
      transition: opacity 200ms ease;
      &:hover {
        opacity: 0.8;
      }
    }
  `}
`;
