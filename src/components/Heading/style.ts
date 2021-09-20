import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    padding: 50px 0;
    text-align: center;

    h1 {
      font-size: 17px;
      color: ${theme.colors.contrastBackground};
      letter-spacing: 4px;
      font-weight: normal;
    }

    p {
      font-size: 55px;
      color: ${theme.fonts.primaryFont};
      font-weight: normal;
    }

    @media screen and (max-width: 768px) {
      p {
        font-size: 45px;
      }
    }
  `}
`;
