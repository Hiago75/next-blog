import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: none;
  z-index: 5;
  width: 100%;
  height: 100%;

  &.open {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const PreviewBox = styled.div`
  ${({ theme }) => css`
    width: 80%;
    height: 450px;
    background-color: ${theme.colors.alternativeBackground};
    border-radius: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);

    p {
      color: ${theme.fonts.primaryFont};
      font-size: 20px;
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
  width: auto;
  height: auto;
  max-width: 256px;
  max-height: 256px;
  border-radius: 50%;
  margin: 15px 0;

  &.cover {
    border-radius: 0;
    max-width: 340px;
    max-height: 256px;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;

  p,
  button {
    display: inline-block;
  }
`;
