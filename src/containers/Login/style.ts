import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.dashboard.colors.darkGray};
`;

export const LoginBox = styled.div`
  max-width: 512px;
  background-color: ${({ theme }) => theme.dashboard.colors.lighterBlack};
  border-radius: 20px;
  padding: 45px 60px;
  text-align: center;
`;

export const IconInput = styled.label`
  ${({ theme }) => css`
    position: relative;

    svg {
      position: absolute;
      left: 15px;
      top: -1px;

      & input:focus {
        fill: ${theme.dashboard.colors.lightBlue};
      }
    }

    input {
      margin: 10px 0;
      border-radius: 10px;
      outline: 0;
      width: 100%;
      height: 50px;
      padding: 0 20px 0 45px;
      transition: border-color 300ms ease;
      background-color: ${theme.dashboard.colors.darkGray};
      border: 2px solid ${theme.dashboard.colors.darkGray};
      border-color: ${theme.dashboard.colors.darkGray};
      color: ${theme.dashboard.font.colors.lightBlue};
      font-size: ${theme.dashboard.font.sizes.small};

      &:focus {
        border-color: ${theme.dashboard.colors.lightBlue};
      }

      &::placeholder {
        font-size: ${theme.dashboard.font.sizes.small};
      }

      //TODO: Change autofill style
    }
  `}
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    margin: 15px 0;

    input,
    button {
      margin: 10px 0;
      border-radius: 10px;
      outline: 0;
      width: 100%;
      height: 50px;
    }

    button {
      background-color: ${theme.colors.mediumBlue};
      color: ${theme.dashboard.font.colors.lightBlue};
      font-size: ${theme.dashboard.font.sizes.small};
      font-weight: bold;
      opacity: 0.7;
      border: 0;
      margin-top: 20px;
      cursor: not-allowed;
      transition: opacity 300ms ease;

      &.form-filled {
        opacity: 1;
        cursor: pointer;
      }
    }
  `}
`;
