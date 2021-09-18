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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100vh;
  flex-direction: column;
`;

export const LoadingWheel = styled.div`
  height: 128px;
  width: 128px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.alternativeBackground};
  border-top: 10px solid ${({ theme }) => theme.colors.contrastColor};
  border-bottom: 10px solid ${({ theme }) => theme.colors.contrastColor};
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
