import styled, { keyframes } from 'styled-components';

const spinnerRotate = keyframes`
  from {
    transform: rotate(0turn);
  }

  to{
    transform: rotate(1turn)
  }
`;

export const Container = styled.div`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: ${({ theme }) => theme.fonts.contrastFont};
    border-radius: 50%;
    animation: ${spinnerRotate} 1s ease infinite;
  }
`;
