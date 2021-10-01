import { useState, useContext } from 'react';
import { AiFillCamera } from 'react-icons/ai';

import {
  Container,
  MediaBox,
  MediaInput,
  FormContainer,
  SelectInput,
  ImagePreview,
  MediaEditor,
  CoverPreview,
} from './style';

import createFormErrorHandler from '../../utils/createFormErrorHandler';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { PanelButton, ImageUpload, InputLabel, ErrorBox, PostEditor } from '../../components';
import { PostCategory } from '../../domain/posts/post';
import { createNewCover, createNewPost, refreshUserToken } from '../../services';
import { RequestContext } from '../../contexts/RequestContext';

interface IDashboardNewPostRequest {
  categories: PostCategory[];
}

export const DashboardNewPost = ({ categories }: IDashboardNewPostRequest) => {
  const { setLoading, responseStatusFactory } = useContext(RequestContext);

  //Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  let coverId: string;

  // Photo
  const [photo, setPhoto] = useState<File>();
  const [temporaryPhoto, setTemporaryPhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [editingCover, setEditingCover] = useState(false);

  // Error states
  const [error, setError] = useState('');
  const { createInputError, resetInputErrors } = createFormErrorHandler();

  // Handle the change event of the title input
  function handleTitleInputChange(event: IOnChangeInput) {
    setTitle(event.target.value);
    resetInputErrors();
  }

  // Handle the change event of the select category input
  function handleSelectInput(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategoryId(event.target.value);
  }

  // Open the image upload element and set the photo/temporary photo
  function handleCoverInputChange(event: IOnChangeInput) {
    const sentPhoto = event.target.files[0];

    setEditingCover(true);
    setPhoto(sentPhoto);
    setPreviewPhoto(URL.createObjectURL(sentPhoto));
  }

  // set the content state as the value sent on the text editor
  function handleContentInputChange(value: () => string) {
    setContent(value());
  }

  // Search for errors on form and display them, if nothing is wrong just return true;
  function validateForm() {
    let isValid = true;

    if (!title) {
      createInputError('title', 'É necessário enviar um titulo');
      isValid = false;
    }

    if (!categoryId) return setError('É necessário selecionar uma categoria');
    if (!photo) return setError('É necessário enviar uma foto de capa');
    if (!content) return setError('É necessário enviar algum conteúdo para ser postado');

    if (error) isValid = false;

    return isValid;
  }

  // Upload the cover to the cloud
  async function uploadCover() {
    await createNewCover({ photo })
      .then(({ id }) => (coverId = id))
      .catch(({ message }) => handleSubmitResponse(false, 'Opa, algo deu errado :(', message));
  }

  function handleSubmitResponse(success: boolean, title: string, message: string) {
    setLoading(false);
    responseStatusFactory(success, title, message);
  }

  function handleCoverPhoto() {
    setTemporaryPhoto(URL.createObjectURL(photo));
  }

  // Reset the inputs and try to submit the form, if something goes wrong displays the error
  async function handlePostFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    window.scrollTo(0, 0);

    setLoading(true);

    // Resets the errors
    resetInputErrors();
    setError(undefined);

    const isValid = validateForm();
    if (!isValid) return setLoading(false);

    await refreshUserToken();
    await uploadCover();

    const post = await createNewPost(title, content, categoryId, coverId);

    if (post.error)
      return handleSubmitResponse(false, 'Opa, acho que algo não está certo', post.message);

    handleSubmitResponse(
      true,
      'Publicação feita :)',
      'Em breve ela vai estar presente no blog para que todos possam ler',
    );
  }

  return (
    <Container>
      {error && <ErrorBox error={error} />}
      <ImageUpload
        cover
        headerText="Foto de capa da publicação"
        confirmText="Deseja realmente usar essa foto como foto de capa ?"
        isOpen={editingCover}
        setIsOpen={setEditingCover}
        previewPhoto={previewPhoto}
        uploadMethod={handleCoverPhoto}
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
        <MediaBox className={temporaryPhoto ? 'image-cover' : ''}>
          <CoverPreview>
            {temporaryPhoto && <ImagePreview src={temporaryPhoto}></ImagePreview>}

            <MediaEditor className={temporaryPhoto ? 'image-cover' : ''}>
              <div>
                <AiFillCamera size={44} />
                Alterar foto de capa
              </div>

              <MediaInput
                onChange={handleCoverInputChange}
                type="file"
                accept="image/png, image/gif, image/jpeg"
              />
            </MediaEditor>
          </CoverPreview>
        </MediaBox>

        <PostEditor onChange={handleContentInputChange} />

        <PanelButton type="submit">Salvar publicação</PanelButton>
      </FormContainer>
    </Container>
  );
};
