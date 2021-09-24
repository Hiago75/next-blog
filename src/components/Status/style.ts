import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 12;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const SuccessAdvice = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    width: 450px;
    height: 450px;
    background-color: ${theme.colors.alternativeBackground};
    border-radius: 20px;
    -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    padding: 0 20px;
    text-align: center;

    h1 {
      font-size: 23px;
      white-space: pre-wrap;
      color: ${theme.fonts.primaryFont};
    }

    @media (max-width: 900px) {
      width: 300px;
      height: 300px;
    }
  `}
`;
