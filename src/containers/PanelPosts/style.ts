import styled from 'styled-components';
import Editor from 'rich-markdown-editor';

export const Container = styled.section`
  display: flex;
  flex-flow: wrap;
  width: 100%;
`;

export const FormContainer = styled.div`
  display: inherit;
  flex-flow: inherit;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
`;

export const TitleInput = styled.input`
  width: 80%;
  font-size: 18px;

  @media (max-width: 900px) {
    width: 100%;
  }
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

  & svg {
    width: 100%;
  }
`;

export const MediaInput = styled.input`
  display: none;
`;

export const TextEditor = styled(Editor)`
  font-size: 18px;
  width: 100%;
  overflow-y: auto;
  border-radius: 20px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.contrastBackground};
  padding: 10px 30px;

  & div {
    background-color: ${({ theme }) => theme.colors.contrastBackground};
    border-radius: 20px;
  }

  & div.ProseMirror {
    border-radius: 20px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.contrastBackground};
    height: 350px;
  }

  & p,
  h1,
  h2,
  h3 {
    background-color: ${({ theme }) => theme.colors.contrastBackground};
  }
`;

export const SelectInput = styled.select`
  width: calc(20% - 10px);

  @media (max-width: 900px) {
    width: 100%;
  }
`;
