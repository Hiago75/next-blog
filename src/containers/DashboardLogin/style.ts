import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};

  & div.login-box {
    margin-bottom: 0;
    margin-top: 40px;
  }
`;

export const LoginBox = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-around;
  margin: 0 2%;
  width: 80%;
  max-height: 100%;
  max-width: 700px;
  background-color: ${({ theme }) => theme.colors.mainBackground};
  border-radius: 20px;
  padding: 40px 20px;

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    margin: 0;
    border-radius: 0px;
  }
`;

export const ReturnToSite = styled.div`
  position: fixed;
  cursor: pointer;
  bottom: 30px;
  left: 25px;
`;

export const LoginForm = styled.form`
  ${({ theme }) => css`
    margin: 15px 0;
    max-width: 70%;

    button {
      border-radius: 10px;
      outline: 0;
      height: 50px;
    }

    label {
      margin-bottom: 25px !important;
    }

    button {
      background-color: ${theme.colors.contrastColor};
      color: ${theme.fonts.contrastFont};
      font-size: 17px;
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

  @media (max-width: 900px) {
    max-width: 100%;

    button {
      width: 100%;
    }
  }
`;
