import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.dashboard.dark.background};
`;

export const LoginBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 2%;
  width: 80%;
  height: 80%;
  max-width: 612px;
  max-height: 624px;
  background-color: ${({ theme }) => theme.dashboard.dark.primaryBlack};
  border-radius: 20px;
  padding: 40px 20px;
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    margin: 15px 0;
    max-width: 70%;

    input,
    button {
      margin: 10px 0;
      border-radius: 10px;
      outline: 0;
      height: 50px;
    }

    button {
      background-color: ${theme.dashboard.dark.lightBlue};
      color: ${theme.dashboard.dark.font.colors.darkBlue};
      font-size: ${theme.dashboard.font.sizes.small};
      font-weight: bold;
      opacity: 0.5;
      border: 0;
      margin-top: 20px;
      cursor: not-allowed;
      transition: opacity 300ms ease;
      width: 170px;
      border-radius: 30px;

      &.form-filled {
        opacity: 1;
        cursor: pointer;
      }
    }
  `}
`;

export const IconInput = styled.label`
  ${({ theme }) => css`
    position: relative;
    text-align: left;
    color: ${theme.dashboard.dark.font.colors.lightGray};
    font-size: 16px;

    & p.error-message {
      color: red;
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
      padding-left: 10px;
      transition: border-color 300ms ease;
      background-color: ${theme.dashboard.dark.darkBlue};
      border: 2px solid ${theme.dashboard.dark.darkBlue};
      border-color: ${theme.dashboard.dark.darkBlue};
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

export const ErrorField = styled.div`
  margin-top: 20px;
  padding: 10px 0;
  border-left: 1px solid red;

  span {
    color: red;
  }
`;
