import styled, { css } from 'styled-components';

export const PreviewBox = styled.div`
  ${({ theme }) => css`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    z-index: 9999;
    width: 80%;
    max-width: 800px;
    height: 500px;
    background-color: ${theme.colors.alternativeBackground};
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
    -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    transition: transform 0.2s ease-in;

    &.open {
      transform: translate(-50%, -50%) scale(1);
    }

    p {
      color: ${theme.fonts.primaryFont};
      font-size: 20px;
    }

    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
  `}
`;

export const Header = styled.div`
  padding: 0 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export const PreviewImage = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 50%;
  margin: 15px 0;

  &.cover {
    border-radius: 0;
    width: auto;
    height: auto;
    max-width: 340px;
    max-height: 256px;
  }

  @media (max-width: 900px) {
    &.cover {
      max-width: 300px;
    }
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 5px 15px;

  p,
  button {
    display: inline-block;
  }

  @media (max-width: 900px) {
    padding: 20px 5px;
    p,
    button {
      width: 100%;
    }
  }
`;
