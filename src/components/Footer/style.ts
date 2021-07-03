import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    padding: 15px;
    text-align: center;
    border-top: 1px solid ${theme.colors.borders.darkGray};
    position: relative;
    left: 0;
    bottom: 0;
  `}
`;
