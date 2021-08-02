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
  margin: 0 2%;
  width: 100%;
  max-width: 512px;
  background-color: ${({ theme }) => theme.dashboard.colors.lighterBlack};
  border-radius: 20px;
  padding: 45px 60px;
  text-align: center;
`;

export const IconInput = styled.label`
  ${({ theme }) => css`
    position: relative;
    text-align: left;
    & p.error-message {
      color: red;
    }

    svg {
      position: absolute;
      left: 15px;
      top: -1px;
    }

    a {
      position: absolute;
      right: 50px;
      top: 0px;
      cursor: pointer;
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

      &.form-error {
        border-color: red;
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
      color: ${theme.font.colors.light};
      font-size: ${theme.dashboard.font.sizes.small};
      font-weight: bold;
      opacity: 0.5;
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

export const ErrorField = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  border-left: 1px solid red;

  span {
    color: red;
  }
`;
