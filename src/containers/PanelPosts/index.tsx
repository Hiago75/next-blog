import { AiFillCamera } from 'react-icons/ai';
import { Container, TitleInput, MediaBox, MediaInput, TextEditor, FormContainer } from './style';

export const PanelPosts = () => {
  return (
    <Container>
      <FormContainer>
        <TitleInput type="text" placeholder="Sem título"></TitleInput>
        <MediaBox>
          <AiFillCamera size={44} />
          Alterar foto de capa
          <MediaInput type="file" />
        </MediaBox>

        {/* TODO: Add real rich text editor */}
        <TextEditor placeholder="Hora de criar algo incrível..."></TextEditor>
      </FormContainer>
    </Container>
  );
};
