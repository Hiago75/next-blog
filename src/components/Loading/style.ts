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
  height: 100vh;
`;

export const LoadingWheel = styled.div`
  height: 128px;
  width: 128px;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.borders.darkGray};
  border-top: 10px solid #fff;
  border-bottom: 10px solid #fff;
  animation: ${rotate} 2s infinite linear;
`;
