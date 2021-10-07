import Markdown from 'markdown-to-jsx';
import styled, { css } from 'styled-components';

export const PostPresentation = styled.section`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
  }
`;

export const PostPresentationData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 60px 0 0 80px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 25px 0;
  }
`;

export const PostPresentationTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 32px;
  margin-bottom: 10px;
`;

export const PostPresentationCategory = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};

  text-transform: uppercase;
  letter-spacing: 1px;

  font-size: 15px;
  font-weight: bold;

  margin-bottom: 30px;
`;

export const PostPresentationReadingTimeCounter = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 13px;

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

export const PostPresentationPhoto = styled.div`
  width: 50%;

  img {
    max-width: 100%;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
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

export const PostContent = styled(Markdown)`
  ${({ theme }) => css`
    padding-left: 30px;
    width: 80%;
    max-width: 720px;
    color: ${theme.fonts.primaryFont};

    img {
      max-width: 100%;
    }

    h1 {
      font-size: 38px;
      text-align: center;
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

    @media (max-width: 1024px) {
      width: 100%;
      padding: 0 2%;
      max-width: 100%;
    }
  `}
`;
