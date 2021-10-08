import styled, { css } from 'styled-components';

export const GlowEffectButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.contrastColor};
    border: 0;
    border-radius: 10px;
    padding: 7px 30px;
    transition: transform 300ms ease;
    cursor: pointer;
    color: ${theme.fonts.contrastFont};
    font-size: 20px;
    transition: box-shadow 0.3s ease;

    &:hover {
      -webkit-box-shadow: 0px 0px 20px 3px rgba(104, 146, 209, 1);
      -moz-box-shadow: 0px 0px 20px 3px rgba(104, 146, 209, 1);
      box-shadow: 0px 0px 20px 3px rgba(104, 146, 209, 1);
    }
  `}
`;
