import styled, { css } from 'styled-components';

export const IconInput = styled.label`
  ${({ theme }) => css`
    position: relative;
    text-align: left;
    color: ${theme.dashboard.dark.font.colors.lightGray};
    font-size: 16px;
    width: 100%;
    margin-top: 10px;

    & p.error-message {
      color: red;
    }

    svg {
      position: absolute;
      left: 15px;
      top: 42px;
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
