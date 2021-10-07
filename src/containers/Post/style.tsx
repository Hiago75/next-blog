import Markdown from 'markdown-to-jsx';
import styled, { css } from 'styled-components';

export const PostPresentation = styled.section`
  display: flex;
  margin-bottom: 40px;
`;

export const PostPresentationData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 60px 80px 0 0;
`;

export const PostPresentationTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 32px;
`;

export const PostPresentationCategory = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};

  text-transform: uppercase;
  letter-spacing: 1px;

  font-size: 15px;
  font-weight: bold;

  margin-bottom: 30px;

  svg {
    position: relative;
    top: 2px;
  }
`;

export const PostPresentationAuthor = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};
  margin-bottom: 50px;
`;

export const PostPresentationPhoto = styled.div`
  width: 50%;

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;

export const PostContentContainer = styled.section`
  display: flex;
`;

export const PostContentGuideSidebar = styled.ul`
  width: 20%;
  max-width: 200px;
  height: 200px;
  position: sticky;
  margin-top: 10px;
  margin-left: 10px;
  transform: translateX(-10px);
  top: 20%;
`;

export const GuideSidebarLi = styled.li`
  color: ${({ theme }) => theme.fonts.smothFont};
  list-style: none;
  margin-bottom: 25px;

  &.active {
    color: ${({ theme }) => theme.colors.contrastColor};
  }
`;

export const GuideSidebarLink = styled.a`
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme.fonts.lightSmothFont};
  }
`;

export const PostContent = styled(Markdown)`
  ${({ theme }) => css`
    margin: 0 auto;
    width: 80%;
    max-width: 800px;
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

      code {
        white-space: pre-wrap;
        word-wrap: break-word;
        text-align: justify;
      }
    }
  `}
`;
