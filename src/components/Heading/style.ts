import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    padding: 50px 0;
    text-align: center;

    h1 {
      font-size: 17px;
      color: ${theme.colors.secondary};
    }

    p {
      font-size: 55px;
      color: ${theme.font.colors.secondary};
    }
  `}
`;
