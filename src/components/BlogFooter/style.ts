import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.alternativeBackground};
    padding: 15px;
    text-align: center;
    border-top: 1px solid ${theme.colors.contrastColor};
    position: relative;
    left: 0;
    bottom: 0;
    color ${theme.fonts.primaryFont};

    b {
      color: red;
      font-size: 18px;
    }
  `}
`;
