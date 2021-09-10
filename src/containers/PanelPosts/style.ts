import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  padding: 10px 3%;
`;

export const FormContainer = styled.div`
  display: inherit;
  flex-flow: inherit;
  align-items: inherit;
  width: 100%;
  max-width: 1024px;
`;

export const TitleInput = styled.input`
  width: 250px;
  font-size: 18px;
`;

export const MediaBox = styled.label`
  display: flex;
  cursor: pointer;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
  padding: 25px 0;
  background-color: ${({ theme }) => theme.dashboard.dark.darkBlue};
  font-size: 25px;
  border-radius: 20px;

  & svg {
    width: 100%;
  }
`;

export const MediaInput = styled.input`
  display: none;
`;

export const TextEditor = styled.textarea`
  font-size: 18px;
  width: 100%;
  background-color: ${({ theme }) => theme.dashboard.dark.darkBlue};
  color: ${({ theme }) => theme.dashboard.dark.font.colors.white};
  border: 0;
  resize: none;
  height: 350px;
  border-radius: 20px;
  padding: 20px 10px;
`;
