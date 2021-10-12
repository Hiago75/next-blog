import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  flex-direction: column;
  background-color: rgba(16, 16, 16, 0.5);
`;

export const LoadingWheel = styled.div`
  height: 128px;
  width: 128px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.alternativeBackground};
  border-top: 10px solid ${({ theme }) => theme.colors.contrastColor};
  animation: ${rotate} 2s infinite linear;
`;

export const LoadingMessage = styled.div`
  width: 100%;
  padding: 20px 0;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.fonts.primaryFont};
  }
`;
