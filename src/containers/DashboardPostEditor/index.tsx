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
  MediaInput,
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
  const router = useRouter();
  const { createNewRequest, setLoading, responseStatusFactory } = useContext(RequestContext);

  //Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');
  let coverId: string;

  // Photo
  const [photo, setPhoto] = useState<File>();
  const [temporaryPhoto, setTemporaryPhoto] = useState(post.cover.url);
  const [previewPhoto, setPreviewPhoto] = useState('');
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
  function handleCoverInputChange(event: IOnChangeInput) {
    const sentPhoto = event.target.files[0];

    setEditingCover(true);
    setPhoto(sentPhoto);
    setPreviewPhoto(URL.createObjectURL(sentPhoto));
  }

  function handleCoverPhoto() {
    setTemporaryPhoto(URL.createObjectURL(photo));
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

  // Reset the inputs and try to submit the form, if something goes wrong displays the error
  async function handlePostFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Resets the errors
    setError(undefined);

    createNewRequest(async () => {
      await refreshUserToken();
      await uploadCover();

      const updatedPost = await updatePost(post.id, title, content, categoryId, coverId);

      if (updatedPost.error) return { error: true, message: updatedPost.message };

      router.push('/cboard/posts/edit/');

      return {
        error: false,
        message: 'Publicação alterada',
      };
    });
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

        <PostEditor defaultValue={post.content} onChange={handleContentInputChange} />

        <RequestButton type="submit">Salvar publicação</RequestButton>
      </FormContainer>
    </Container>
  );
};
