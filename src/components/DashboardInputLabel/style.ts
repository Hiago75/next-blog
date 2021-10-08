import styled, { css } from 'styled-components';

export const Label = styled.label`
  ${({ theme }) => css`
    display: block;
    text-align: left;
    color: ${theme.fonts.smothFont};
    font-size: 17px;
    margin-top: 25px;

    & p.error-message {
      color: red;
      margin-top: 5px;
    }

    &.onPanel {
      margin: 20px 0;

      input {
        margin: 0;
        background-color: ${theme.colors.mainBackground};
      }
    }

    &.noMargin {
      margin: 0;

      input {
        margin: 0;
      }
    }

    &.notEditable {
      input {
        cursor: not-allowed;
        opacity: 0.5;
      }
    }

    input {
      margin-top: 10px;
      border-radius: 10px;
      outline: 0;
      width: 100%;
      height: 50px;
      padding-left: 10px;
      transition: border-color 300ms ease;
      background-color: ${theme.colors.contrastBackground};
      border: 2px solid ${theme.colors.contrastBackground};
      border-color: ${theme.colors.contrastBackground};
      color: ${theme.fonts.primaryFont};
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

    @media (max-width: 900px) {
      width: 100% !important;
    }
  `}
`;
