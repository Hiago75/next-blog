import styled, { css, keyframes } from 'styled-components';

const twinkle = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
`;

export const trackProgress = keyframes`
  0% {
    transform: scaleX(1);
  }

  100% {
    transform: scaleX(0);
  }
`;

export const ResponseStatus = styled.div`
  width: 400px;
  height: 450px;
  cursor: pointer;

  //Position
  position: absolute;
  z-index: 9999;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%) scale(0);
  transition: transform 0.2s ease-in;

  &.active {
    transform: translate(-50%, 50%) scale(1);
  }

  svg {
    animation: ${twinkle} 0.8s linear infinite;
  }

  h1 {
    font-size: 28px;
    white-space: pre-wrap;
    margin-bottom: 10px;
  }

  p {
    font-size: 17px;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 350px;
  }
`;

export const ResponseBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.alternativeBackground};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    text-align: center;
    color: ${theme.fonts.primaryFont};
  `}
`;

export const ProgressBar = styled.span`
  display: block;
  position: absolute;
  top: 0;
  transform-origin: left;
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.contrastColor};
  animation: ${trackProgress} linear 1 forwards;

  ${ResponseStatus}.paused & {
    animation-play-state: paused;
  }
`;

export const Advice = styled.div`
  height: calc(100% - 5px);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  padding: 0 20px;
`;
