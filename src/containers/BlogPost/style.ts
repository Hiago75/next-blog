import Markdown from 'markdown-to-jsx';
import styled, { css } from 'styled-components';

export const PostContainer = styled.article``;

export const PostPresentation = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const PostPresentationPhoto = styled.div`
  width: 60%;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PostPresentationData = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 60px 0 0 50px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 25px 0;
  }
`;

export const PostPresentationTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 32px;
  margin-top: 30px;
`;

export const PostPresentationCategory = styled.a`
  color: ${({ theme }) => theme.fonts.contrastFont};
  background-color: ${({ theme }) => theme.colors.contrastColor};

  padding: 2px 15px;
  border-radius: 10px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;

  font-size: 17px;
  display: inline-block;
  font-weight: bold;
`;

export const PostPresentationReadingTimeCounter = styled.p`
  color: ${({ theme }) => theme.fonts.smothFont};
  margin: 15px 0;
  font-size: 16px;

  svg {
    position: relative;
    top: 2px;
  }
`;

export const PostPresentationAuthor = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const PostContentContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const PostContentGuideSidebar = styled.ul`
  width: 20%;
  max-width: 200px;
  position: sticky;
  margin-top: 10px;
  transform: translateX(-10px);
  top: 30%;

  span {
    padding: 0 0 30px 10px;
    font-size: 24px;
    color: ${({ theme }) => theme.fonts.primaryFont};
    display: none;
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
    position: relative;

    span {
      display: block;
    }
  }
`;

export const PostContentSentry = styled.span`
  display: inline-block;
  width: 100%;
  height: 5px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    border-top: 1px solid ${({ theme }) => theme.fonts.smothFont};
    margin-bottom: 10px;
  }
`;

export const PostContentBox = styled.div`
  padding-left: 30px;
  width: 80%;
  max-width: 720px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 2%;
    max-width: 100%;
  }
`;

export const PostContent = styled(Markdown)`
  ${({ theme }) => css`
    color: ${theme.fonts.primaryFont};

    img {
      max-width: 100%;
    }

    h1 {
      font-size: 38px;
      margin-bottom: 25px;
    }

    h2 {
      font-size: 33px;
    }

    p {
      margin: 10px 0;
      color: ${theme.fonts.lightSmothFont};
      line-height: 25px;
    }

    ol,
    ul {
      list-style-position: inside;
      padding: 5px 15px;
    }

    a {
      text-decoration: underline;
      color: ${theme.colors.contrastColor};
    }

    pre {
      line-height: 25px;
      background-color: ${theme.colors.alternativeBackground};
      padding: 20px;
      overflow-x: auto;

      code {
        white-space: pre-wrap;
        text-align: justify;
      }
    }
  `}
`;

export const PostTags = styled.div`
  ${({ theme }) => css`
    margin-top: 50px;

    p {
      font-weight: bold;
      display: inline-block;
      color: ${theme.fonts.primaryFont};
    }

    span {
      background-color: ${theme.colors.contrastColor};
      padding: 5px 10px;
      margin: 0 5px;
      border-radius: 20px;
      color: ${theme.fonts.contrastFont};
    }
  `}
`;
