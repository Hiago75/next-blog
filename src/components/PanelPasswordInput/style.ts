import styled, { css } from 'styled-components';

export const IconInput = styled.label`
  ${({ theme }) => css`
    position: relative;
    text-align: left;
    color: ${theme.fonts.smothFont};
    font-size: 16px;
    width: 100%;
    margin-top: 25px;

    & p.error-message {
      color: red;
    }

    svg {
      position: absolute;
      left: 15px;
      top: 39px;
    }

    a {
      position: absolute;
      right: 50px;
      top: 0px;
      cursor: pointer;
    }

    input {
      margin: 5px 0;
      border-radius: 10px;
      outline: 0;
      width: 100%;
      height: 50px;
      padding-left: 10px;
      transition: border-color 300ms ease;
      background-color: ${theme.colors.contrastBackground};
      border: 2px solid ${theme.colors.contrastBackground};
      border-color: ${theme.colors.contrastBackground};
      color: ${theme.colors.contrastColor};
      font-size: 17px;

      &:focus {
        border-color: ${theme.colors.contrastColor};
      }

      &::placeholder {
        font-size: 17px;
      }

      &.form-error {
        border-color: red;
      }

      //TODO: Change autofill style
    }
  `}
`;
