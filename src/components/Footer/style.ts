import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: 15px;
    text-align: center;
    border-top: 1px solid ${theme.colors.darkGray};
    position: relative;
    left: 0;
    bottom: 0;
  `}
`;
