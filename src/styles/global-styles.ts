import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scrollbar-width: 10px;
    scrollbar-color: #7D7D7D;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 10px;
  }

  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #7D7D7D;
  }

  html, body{
    height: 100%;
  }

  body{
    background: ${({ theme }) => theme.colors.mainBackground};
  }

  select{
    background-color: #a0aaba;
    color: #091323;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    padding: 0 15px;

    @media(max-width: 900px){
      width: 100%;
      margin-top: 20px;
      padding: 15px 15px;
    }
  }

  & .unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }



`;

export const BallDivider = styled.span`
  width: 5px;
  height: 5px;
  background-color: ${({ theme }) => theme.fonts.primaryFont};
  border-radius: 50%;
  margin: 3px 8px;
  display: inline-block;
`;

export const Category = styled.span`
  background-color: ${({ theme }) => theme.colors.contrastColor};
  padding: 1px 4px;
  border-radius: 5px;
  display: inline-block;

  a {
    color: ${({ theme }) => theme.fonts.primaryFont} !important;
    font-size: 15px;
  }
`;
