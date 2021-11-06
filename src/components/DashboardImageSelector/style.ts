import styled, { css } from 'styled-components';

export const PreviewBox = styled.div`
  ${({ theme }) => css`
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%) scale(0);

    width: 80%;
    max-width: 800px;
    height: 450px;
    border-radius: 20px;
    padding: 15px 0;

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    -webkit-box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);
    box-shadow: 0px 8px 12px -1px rgba(0, 0, 0, 0.35);

    transition-property: transform, max-height;
    transition: 0.2s ease-in;

    background-color: ${theme.colors.alternativeBackground};

    &.open {
      transform: translate(-50%, -50%) scale(1);
    }

    &.gallery {
      height: 90%;
    }

    p {
      color: ${theme.fonts.primaryFont};
    }

    @media (max-width: 900px) {
      width: 100%;
      height: 70%;
      max-height: 360px;
      border-radius: 0;

      &.gallery {
        height: 100%;
        max-height: 100%;
      }
    }
  `}
`;

export const Header = styled.header`
  padding: 0 15px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 0 !important;
  max-height: 10%;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  height: 10%;

  svg {
    cursor: pointer;
  }
`;

export const HeaderSection = styled.div``;

export const HeaderItem = styled.p`
  padding: 0 15px;
  font-size: 17px;
  cursor: pointer;
  display: inline-block;
`;

export const MediaInput = styled.input`
  display: none;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: calc(90% - 60px);
`;

export const AddPhoto = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const MediaLabel = styled.label`
  display: flex;
  position: relative;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 25px;
  border-radius: 20px;
  max-height: 450px;
  align-items: center;

  svg {
    width: 100%;
  }

  div {
    width: 100%;
    text-align: center;
  }

  &.image-cover {
    width: auto;
    padding: 0;

    img {
      margin: 0;
    }
  }
`;

export const Preview = styled.div``;

export const MediaOverlay = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  bottom: 0;

  ${MediaLabel}:hover & {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 256px;
  height: 256px;
  border-radius: 50%;

  &.cover {
    border-radius: 0;
    width: auto;
    height: auto;
    max-width: 450px;
    max-height: 300px;
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
  height: 60px;

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
