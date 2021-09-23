import { useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';

import {
  Container,
  MediaBox,
  MediaInput,
  TextEditor,
  FormContainer,
  SelectInput,
  ImagePreview,
} from './style';

import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { PanelButton, ImageUpload, InputLabel } from '../../components';
import { PostCategory, PostCover } from '../../domain/posts/post';
import { createNewCover, createNewPost } from '../../services';

interface PanelPostsRequest {
  categories: PostCategory;
}

export const PanelPosts = ({ categories }: PanelPostsRequest) => {
  //Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [cover, setCover] = useState<PostCover>();

  const [temporaryPhoto, setTemporaryPhoto] = useState('');
  const [photo, setPhoto] = useState<File>();
  const [editingCover, setEditingCover] = useState(false);

  function handleTitleInputChange(event: IOnChangeInput) {
    setTitle(event.target.value);
  }

  function handleSelectInput(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategoryId(event.target.value);
  }

  function handleCoverInputClick(event) {
    event.target.value = null;
    setPhoto(undefined);
    setTemporaryPhoto('');
  }

  function handleCoverInputChange(event: IOnChangeInput) {
    const sentPhoto = event.target.files[0];

    setEditingCover(true);
    setPhoto(sentPhoto);
    setTemporaryPhoto(URL.createObjectURL(sentPhoto));
  }

  async function uploadCover() {
    const cover = await createNewCover({ photo });
    setCover(cover);
    console.log(cover);
  }

  function handleContentInputChange(value: () => string) {
    setContent(value());
  }

  function handlePostFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    createNewPost(title, content, categoryId, cover.id);
  }

  return (
    <Container>
      <ImageUpload
        cover
        headerText="Foto de capa da publicação"
        confirmText="Deseja realmente usar essa foto como foto de capa ?"
        isOpen={editingCover}
        setIsOpen={setEditingCover}
        temporaryPhoto={temporaryPhoto}
        uploadMethod={uploadCover}
      ></ImageUpload>

      <FormContainer onSubmit={handlePostFormSubmit}>
        <InputLabel noMargin widthPercentage={80} htmlFor="title" id="title">
          <input
            onChange={handleTitleInputChange}
            type="text"
            placeholder="Título"
            name="title"
          ></input>
        </InputLabel>
        <SelectInput defaultValue="Categorias" onChange={handleSelectInput}>
          <option value="Categorias" disabled>
            Categorias
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </SelectInput>
        <MediaBox>
          <div>
            <AiFillCamera size={44} />
            Alterar foto de capa
          </div>

          <MediaInput
            onClick={handleCoverInputClick}
            onChange={handleCoverInputChange}
            type="file"
            accept="image/png, image/gif, image/jpeg"
          />

          {cover && <ImagePreview src={cover.url}></ImagePreview>}
        </MediaBox>

        <TextEditor
          // TODO: Add real upload image to the cloudinary provider
          uploadImage={async (file) => {
            console.log(file);
            return file.name;
          }}
          placeholder="Escreva algo legal... Se não souber por onde começar aperte '/'"
          dark={true}
          className="edit-text"
          onChange={handleContentInputChange}
        />

        <PanelButton>Salvar publicação</PanelButton>
      </FormContainer>
    </Container>
  );
};
