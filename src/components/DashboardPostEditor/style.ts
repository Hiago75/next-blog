import styled, { css } from 'styled-components';
import Editor from 'rich-markdown-editor';

export const TextEditor = styled(Editor)`
  ${({ theme }) => css`
    font-size: 18px;
    width: 100%;
    overflow-y: auto;
    border-radius: 20px;
    width: 100%;
    background-color: ${theme.colors.contrastBackground};
    padding: 10px 30px;
    color: ${theme.fonts.primaryFont};

    & div {
      background-color: ${theme.colors.contrastBackground};
      border-radius: 20px;
    }

    & div.ProseMirror {
      border-radius: 20px;
      width: 100%;
      background-color: ${theme.colors.contrastBackground};
      height: auto;
      min-height: 500px;
    }

    & p,
    h1,
    h2,
    h3 {
      color: ${theme.fonts.primaryFont};
      background-color: ${theme.colors.contrastBackground};
    }

    pre {
      background-color: #1c2121;
    }
  `}
`;
