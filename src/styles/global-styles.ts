import styled, { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  html, body{
    height: 100%;
  }

  body{
    background: ${theme.colors.gradients.primary};
    color: ${theme.font.colors.primary};
  }
`;

export const BallDivider = styled.span`
  width: 5px;
  height: 5px;
  background-color: ${({ theme }) => theme.font.colors.primary};
  border-radius: 50%;
  margin: 3px 8px;
  display: inline-block;
`;

export const Category = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 1px 4px;
  border-radius: 5px;
  display: inline-block;

  a {
    color: ${({ theme }) => theme.font.colors.primary} !important;
    font-size: 15px;
  }
`;
