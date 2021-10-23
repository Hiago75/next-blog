import { useState, useContext, useMemo } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { FaPlus, FaTimes } from 'react-icons/fa';

import {
  Container,
  MediaBox,
  MediaInput,
  FormContainer,
  SelectInput,
  ImagePreview,
  MediaEditor,
  CoverPreview,
  PostTagsBox,
  PostTagsUl,
  PostTag,
  PostTagInput,
  AvaliablePostTags,
  PostTagsAdvice,
} from './style';

import createFormErrorHandler from '../../utils/createFormErrorHandler';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { ImageUpload, InputLabel, ErrorBox, PostEditor, RequestButton } from '../../components';
import { PostCategory, PostTags } from '../../domain/posts/post';
import { createNewCover, createNewPost, refreshUserToken } from '../../services';
import { RequestContext } from '../../contexts/RequestContext';
import { useApi } from '../../hooks/useApi';

interface IDashboardNewPostRequest {
  tags: PostTags[];
  categories: PostCategory[];
}

export const DashboardNewPost = ({ categories, tags }: IDashboardNewPostRequest) => {
  const { setRequestOnProgress, responseStatusFactory } = useContext(RequestContext);
  const { createNewFormRequest } = useApi();

  //Form states
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('');

  let coverId: string;

  //Tags states
  const [selectedTags, setSelectedTags] = useState<PostTags[]>([]);
  const [tagsInputValue, setTagsInputValue] = useState('');
  const suggestionTags = useMemo<PostTags[]>(
    () => filterSuggestionTags(selectedTags),
    [selectedTags],
  );

  // Photo
  const [photo, setPhoto] = useState<File>();
  const [temporaryPhoto, setTemporaryPhoto] = useState('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [editingCover, setEditingCover] = useState(false);

  // Error states
  const [error, setError] = useState('');
  const { createInputError, resetInputErrors } = createFormErrorHandler();

  // Filter the tags that will be suggested
  function filterSuggestionTags(selectedTags) {
    const notUsedTags = tags.filter((tag) => !selectedTags.includes(tag));

    return notUsedTags;
  }

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
    setRequestOnProgress(false);
    responseStatusFactory(success, title, message);
  }

  function handleCoverPhoto() {
    setTemporaryPhoto(URL.createObjectURL(photo));
  }

  function getSelectedTagsIds() {
    return selectedTags.map((tag) => tag.id);
  }

  // Reset the inputs and try to submit the form, if something goes wrong displays the error
  async function handlePostFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Resets the errors
    resetInputErrors();
    setError(undefined);

    //Use a useApi hook function to handle the form request
    createNewFormRequest(async () => {
      const tagsIds = getSelectedTagsIds();

      await refreshUserToken();
      await uploadCover();

      const post = await createNewPost(title, content, tagsIds, categoryId, coverId);

      if (post.error) return { error: true, message: post.message };

      return {
        error: false,
        message: 'Em breve ela vai estar presente no blog para que todos possam ler',
      };
    }, validateForm);
  }

  //Know the special keys and their functions, only execute then if the keypressed is on the special keys list
  function handleTagInputKeyboard(event: React.KeyboardEvent<HTMLInputElement>) {
    const specialKeys = {
      ArrowRight() {
        createPostTag();
      },
      ','() {
        event.preventDefault();
        createPostTag();
      },
    };

    const keyPressed = event.key;

    const specialFunction = specialKeys[keyPressed];
    specialFunction && specialFunction();
  }

  function handleSuggestionTagClick(tag: PostTags) {
    createPostTag(tag);
  }

  //Create a tag
  function createPostTag(tag?: PostTags) {
    if (tag) {
      setSelectedTags((prevTags) => [...prevTags, tag]);
      return setTagsInputValue('');
    }

    const formatedTag = tagsInputValue.replace(/\s+/g, ' ').replace(',', '');

    const objectTag = tags.find((tag) => tag.name.toLowerCase() === formatedTag.toLowerCase());
    if (!objectTag) return;

    setSelectedTags((prevTags) => [...prevTags, objectTag]);
    setTagsInputValue('');
  }

  //Remove a tag
  function removePostTag(tag: PostTags) {
    const tagIndex = selectedTags.indexOf(tag);
    if (tagIndex === -1) return;

    setSelectedTags((prevValue) => prevValue.filter((el, index) => index !== tagIndex));
  }

  //Set tag value every time post tag input changes
  function handlePostTagInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTagsInputValue(event.target.value);
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

        <PostTagsBox panelTitle="Tags">
          <PostTagsAdvice>
            Para adicionar uma tag basta adicionar uma virgula ou a seta direita do teclado
          </PostTagsAdvice>
          <PostTagsUl>
            {selectedTags?.map((tag) => (
              <PostTag onClick={() => removePostTag(tag)} key={tag?.id}>
                {tag?.name}
                <FaTimes />
              </PostTag>
            ))}
            <PostTagInput
              onChange={handlePostTagInputChange}
              value={tagsInputValue}
              onKeyDown={handleTagInputKeyboard}
              type="text"
            ></PostTagInput>
          </PostTagsUl>

          <AvaliablePostTags>
            <p>Que tal uma sugestão?</p>
            {suggestionTags?.map((tag) => (
              <PostTag onClick={() => handleSuggestionTagClick(tag)} className="add" key={tag.id}>
                {tag.name}
                <FaPlus onClick={() => removePostTag(tag)} />
              </PostTag>
            ))}
          </AvaliablePostTags>
        </PostTagsBox>

        <RequestButton type="submit">Salvar publicação</RequestButton>
      </FormContainer>
    </Container>
  );
};
