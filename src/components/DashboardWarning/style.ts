import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.fonts.primaryFont};
    min-width: 310px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    padding: 20px;
    border-radius: 20px;
    background-color: ${theme.colors.alternativeBackground};
    text-align: center;
    -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    transition: transform 0.2s ease-in;

    &.active {
      transform: translate(-50%, -50%) scale(1);
    }
  `}
`;

export const Title = styled.h1`
  margin: 15px 0;
`;

export const Message = styled.p`
  margin: 15px 0;
`;

export const ButtonBox = styled.div`
  margin: 20px 0;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    padding: 5px 10px;
    border-radius: 10px;
    border: 0;
    margin: 0 10px;
    color: ${theme.fonts.primaryFont};
    font-size: 17px;
    cursor: pointer;

    svg {
      position: relative;
      top: 2px;
    }

    &.negative {
      background-color: ${theme.colors.errorColor};
    }

    &.positive {
      background-color: ${theme.colors.successColor};
    }
  `}
`;
