import { AiFillCamera } from 'react-icons/ai';

import {
  Container,
  TitleInput,
  MediaBox,
  MediaInput,
  TextEditor,
  FormContainer,
  SelectInput,
} from './style';

import { PanelButton } from '../../components';

export const PanelPosts = () => {
  return (
    <Container>
      <FormContainer>
        <TitleInput type="text" placeholder="Título"></TitleInput>
        <SelectInput>
          <option value="none" selected disabled hidden>
            Categoria
          </option>
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="marketing">Marketing</option>
        </SelectInput>
        <MediaBox>
          <AiFillCamera size={44} />
          Alterar foto de capa
          <MediaInput type="file" />
        </MediaBox>

        {/* TODO: Add real rich text editor */}
        <TextEditor
          uploadImage={async (file) => {
            console.log(file);
            return file.name;
          }}
          placeholder="Escreva algo legal... Se não souber por onde começar aperte '/'"
          dark={true}
          className="edit-text"
        />

        <PanelButton>Salvar publicação</PanelButton>
      </FormContainer>
    </Container>
  );
};
