import styled, { css } from 'styled-components';
import Editor from 'rich-markdown-editor';

export const Container = styled.section`
  display: flex;
  flex-flow: wrap;
  justify-content: flex-start;
  position: relative;
  width: 100%;
  padding-right: 20px;

  @media (max-width: 900px) {
    padding-right: 0;
  }
`;

export const FormContainer = styled.form`
  display: inherit;
  flex-flow: inherit;
  justify-content: space-between;
  width: 100%;
`;

export const MediaBox = styled.label`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.colors.contrastBackground};
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-size: 25px;
  border-radius: 20px;
  max-height: 450px;

  & svg {
    width: 100%;
  }

  div {
    width: 100%;
    text-align: center;
  }
`;

export const MediaInput = styled.input`
  display: none;
`;

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
      height: 350px;
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

export const SelectInput = styled.select`
  width: calc(20% - 10px);
  height: 50px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ImagePreview = styled.img`
  width: auto;
  height: auto;
  max-height: 250px;
  border-radius: 20px;
  margin-top: 20px;
`;
