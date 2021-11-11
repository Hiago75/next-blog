import { useState, useContext, useMemo, useEffect } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { FaPlus, FaTimes } from 'react-icons/fa';

import {
  Container,
  MediaBox,
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

interface IDashboardNewPostRequest {
  tags: PostTags[];
  categories: PostCategory[];
}

export const DashboardNewPost = ({ categories, tags }: IDashboardNewPostRequest) => {
  const { createNewFormRequest, setRequestOnProgress, responseStatusFactory } =
    useContext(RequestContext);

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
  const [photoUrl, setPhotoUrl] = useState<string>('');
  const [previewPhoto, setPreviewPhoto] = useState('');
  const [photoChoosed, setPhotoChoosed] = useState(false);
  const [editingCover, setEditingCover] = useState(false);

  // Error states
  const [error, setError] = useState('');
  const { createInputError, resetInputErrors } = createFormErrorHandler();

  // Filter the tags that will be suggested
  function filterSuggestionTags(selectedTags: PostTags[]) {
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
  function handleCoverInputChange() {
    setEditingCover(true);
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
    if (!photo && !photoUrl) return setError('É necessário enviar uma foto de capa');
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
    responseStatusFactory(success, message);
  }

  function getSelectedTagsIds() {
    return selectedTags.map((tag) => tag.id);
  }

  //Format post properties
  async function postFactory() {
    const tagIds = getSelectedTagsIds();

    if (photoUrl) {
      const postProperties = { title, content, tagIds, categoryId, photoUrl };
      return postProperties;
    }

    await uploadCover();
    const postProperties = { title, content, tagIds, categoryId, coverId };

    return postProperties;
  }

  // Reset the inputs and try to submit the form, if something goes wrong displays the error
  async function handlePostFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    // Resets the errors
    resetInputErrors();
    setError(undefined);

    //Create a new form request to create a post
    createNewFormRequest(async () => {
      await refreshUserToken();
      const postProperties = await postFactory();

      const post = await createNewPost(postProperties);

      if (post.error) return { error: true, message: post.message };

      return {
        error: false,
        message: 'Publicação criada',
      };
    }, validateForm);
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

  useEffect(() => {
    if (photoUrl || photo) setPhotoChoosed(true);
    else setPhotoChoosed(false);
  }, [photoUrl, photo]);

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

        <PostEditor onChange={handleContentInputChange} />

        <PostTagsBox panelTitle="Tags">
          <PostTagsAdvice>
            Para adicionar uma tag basta clicar nela, caso não esteja encontrando a tag que deseja,
            você pode pesquisar na caixa abaixo
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
              placeholder="Procurar uma tag"
              value={tagsInputValue}
              type="text"
            ></PostTagInput>
          </PostTagsUl>

          <AvaliablePostTags>
            <p>Que tal uma sugestão?</p>
            {suggestionTags
              ?.filter((tag) => {
                //If there is no search term, return all the tags
                if (tagsInputValue === '') return tag;

                //If there is a search term, try to match this one with one tag
                if (tag.name.toLowerCase().includes(tagsInputValue.toLowerCase())) return tag;
              })
              .map((tag) => (
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
