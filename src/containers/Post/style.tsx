import styled, { css } from 'styled-components';

export const Heading = styled.h2`
  ${({ theme }) => css`
    font-size: 4rem;
    margin: 10px 0;
    text-align: center;
    color: ${theme.colors.secondary};
  `}
`;

export const PostCover = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

export const PostDetails = styled.div`
  text-align: center;

  p,
  h5 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.font.colors.secondary};
    padding: 10px 0;
    font-size: 15px;
    letter-spacing: 2px;
  }

  p {
    display: inline-block;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const LineDivider = styled.span`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.borders.darkGray};
  display: inline-block;
  margin: 15px 0;
`;

export const Content = styled.article`
  ${({ theme }) => css`
    img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      max-width: 100%;
      max-height: 650px;
    }

    h2 {
      color: ${theme.font.colors.primary};
      font-size: 32px;
    }

    p,
    ol {
      margin: 10px 0;
      color: ${theme.font.colors.secondary};
      line-height: 22px;
    }

    ol,
    ul {
      list-style-position: inside;
      padding: 5px 15px;
    }

    a {
      text-decoration: none;
      color: ${theme.colors.secondary};

      &:hover {
        text-decoration: underline;
      }
    }

    pre {
      line-height: 25px;
      background-color: ${theme.colors.tertiary};
      padding: 20px;
    }
  `}
`;
