import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AiFillCamera } from 'react-icons/ai';

import {
  Container,
  FormContainer,
  SelectInput,
  CoverPreview,
  ImagePreview,
  MediaBox,
  MediaEditor,
} from './style';
import { ErrorBox, ImageUpload, InputLabel, PostEditor, RequestButton } from '../../components';

import { PostCategory, PostData } from '../../domain/posts/post';
import { RequestContext } from '../../contexts/RequestContext';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { createNewCover, refreshUserToken } from '../../services';
import { updatePost } from '../../services/posts/updatePost';

interface IDashboardPostEditorRequest {
  post: PostData;
  categories: PostCategory[];
}

export const DashboardPostEditor = ({ post, categories }: IDashboardPostEditorRequest) => {
  const { createNewRequest, setLoading, responseStatusFactory } = useContext(RequestContext);

  //Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  let coverId: string;

  // Photo
  const [photo, setPhoto] = useState<File>();
  const [photoUrl, setPhotoUrl] = useState<string>(post.externalPhotoUrl || post.cover.url);
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [photoChoosed, setPhotoChoosed] = useState(
    post.externalPhotoUrl || post.cover.url ? true : false,
  );
  const [editingCover, setEditingCover] = useState(false);

  // Error states
  const [error, setError] = useState('');

  // Handle the change event of the title input
  function handleTitleInputChange(event: IOnChangeInput) {
    setTitle(event.target.value);
  }

  // Handle the change event of the select category input
  function handleSelectInput(event: React.ChangeEvent<HTMLSelectElement>) {
    setCategoryId(event.target.value);
  }

  // Open the image upload element and set the photo/temporary photo
  function handleCoverInputChange() {
    setEditingCover(true);
  }

  // set the content state as the value sent on the text editor
  function handleContentInputChange(value: () => string) {
    setContent(value());
  }

  // Upload the cover to the cloud
  async function uploadCover() {
    await createNewCover({ photo })
      .then(({ id }) => (coverId = id))
      .catch(({ message }) => handleSubmitResponse(false, message));
  }

  function handleSubmitResponse(success: boolean, message: string) {
    setLoading(false);
    responseStatusFactory(success, message);
  }

  //Format post properties
  async function postFactory() {
    const postId = post.id;
    const basePost = { postId, title, content, categoryId };

    if (photoUrl) {
      return { ...basePost, photoUrl };
    }

    await uploadCover();

    return { ...basePost, photoUrl };
  }

  // Reset the inputs and try to submit the form, if something goes wrong displays the error
  async function handlePostFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Resets the errors
    setError(undefined);

    createNewRequest(async () => {
      await refreshUserToken();
      const postProperties = await postFactory();

      const post = await updatePost(postProperties);

      if (post.error) return { error: true, message: post.message };

      return {
        error: false,
        message: 'Publicação criada',
      };
    });
  }

  return (
    <Container>
      {error && <ErrorBox error={error} />}
      <ImageUpload
        cover
        isOpen={editingCover}
        setIsOpen={setEditingCover}
        setPhoto={setPhoto}
        setPhotoUrl={setPhotoUrl}
        setPreviewPhoto={setPreviewPhoto}
      ></ImageUpload>

      <FormContainer onSubmit={handlePostFormSubmit}>
        <InputLabel noMargin widthPercentage={80} htmlFor="title" id="title">
          <input
            onChange={handleTitleInputChange}
            type="text"
            placeholder="Título"
            name="title"
            defaultValue={post.title}
          ></input>
        </InputLabel>
        <SelectInput defaultValue={post.category.id} onChange={handleSelectInput}>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </SelectInput>
        <MediaBox className={photoChoosed ? 'image-cover' : ''}>
          <CoverPreview>
            <MediaEditor
              onClick={handleCoverInputChange}
              className={photoChoosed ? 'image-cover' : ''}
            >
              <div>
                <AiFillCamera size={44} />
                Alterar foto de capa
              </div>
            </MediaEditor>

            <ImagePreview src={photoUrl || previewPhoto}></ImagePreview>
          </CoverPreview>
        </MediaBox>

        <PostEditor defaultValue={post.content} onChange={handleContentInputChange} />

        <RequestButton type="submit">Salvar publicação</RequestButton>
      </FormContainer>
    </Container>
  );
};
