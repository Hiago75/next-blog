/* eslint-disable react/no-unescaped-entities */
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, CategoryBox, CategoriesContainer, TagsContainer, Trashcan } from './style';
import { PanelBox, InputLabel, Warning, RequestButton } from '../../components';

import { PostCategory, PostCount, PostTags } from '../../domain/posts/post';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import {
  createNewCategory,
  createNewTag,
  deleteCategory,
  deleteTag,
  refreshUserToken,
} from '../../services';
import { RequestContext } from '../../contexts/RequestContext';

interface IDashboardCategoriesRequest {
  categories: PostCategory[];
  tags: PostTags[];
  numberOfPosts: PostCount;
}

export const DashboardCategories = ({
  categories,
  tags,
  numberOfPosts,
}: IDashboardCategoriesRequest) => {
  const theme = useContext(ThemeContext);
  const {
    setLoading,
    responseStatusFactory,
    refreshServerSideProps,
    setIsRefreshing,
    createNewRequest,
  } = useContext(RequestContext);

  const [newCategory, setNewCategory] = useState('');
  const [categoryToBeDeleted, setCategoryToBeDeleted] = useState('');
  const [categoryWarning, setCategoryWarning] = useState(false);

  const [newTag, setNewTag] = useState('');
  const [tagToBeDeleted, setTagToBeDeleted] = useState('');
  const [tagWarning, setTagWarning] = useState(false);

  // Format the received categories into an array of objects
  function getCategoriesData() {
    const rawCategories = numberOfPosts.categories;
    const categoriesData: { name: string; posts: number }[] = [];

    for (const category in rawCategories) {
      const categoryObject = { name: category, posts: rawCategories[category] };
      categoriesData.push(categoryObject);
    }

    return { categoriesData };
  }

  const { categoriesData } = getCategoriesData();

  // Handle category input change
  function handleCategoryInputChange(event: IOnChangeInput) {
    setNewCategory(event.target.value);
  }

  // Set the tag input value when the input changes
  function handleTagInputChange(event: IOnChangeInput) {
    setNewTag(event.target.value);
  }

  async function handleTagSubmit(event: React.FormEvent) {
    event.preventDefault();

    createNewRequest(async () => {
      await refreshUserToken();

      const { error, message } = await createNewTag(newTag);

      //Fail
      if (error) return { error: true, message: message };

      //Success
      refreshServerSideProps();
      return { error: false, message: 'Nova tag criada' };
    });
  }

  // Submit the new category
  async function handleCategorySubmit(event: React.FormEvent) {
    event.preventDefault();

    createNewRequest(async () => {
      await refreshUserToken();

      const { error, message } = await createNewCategory(newCategory);

      //Fail
      if (error) return { error: true, message: message };

      //Success
      refreshServerSideProps();
      return { error: false, message: 'Nova categoria criada' };
    });
  }

  //Open the warning and store the id
  async function handleCategoryDeleteClick(categoryId: string) {
    setCategoryToBeDeleted(categoryId);
    setCategoryWarning(true);
  }

  function handleTagDeleteClick(tagId: string) {
    setTagToBeDeleted(tagId);
    setTagWarning(true);
  }

  // Callback that will be executed when the user confirm the warning box, basically deletes the category
  async function categoryWarningConfirmClick() {
    setCategoryWarning(false);
    setLoading(true);
    await refreshUserToken();
    const { error, message } = await deleteCategory(categoryToBeDeleted);
    setLoading(false);

    //Fail
    if (error) return responseStatusFactory(false, message);

    refreshServerSideProps();

    //Success
    responseStatusFactory(true, 'Categoria apagada');
    setCategoryToBeDeleted(undefined);
  }

  // Function that will be executed when the user cancel the warning box, just closes the box
  function categoryWarningCancelClick() {
    setCategoryWarning(false);
    setCategoryToBeDeleted(undefined);
  }

  // Callback that will be executed when the user confirm the warning box, basically deletes the tag
  async function tagWarningConfirmClick() {
    setTagWarning(false);
    setLoading(true);
    await refreshUserToken();
    const { error, message } = await deleteTag(tagToBeDeleted);
    setLoading(false);

    //Fail
    if (error) return responseStatusFactory(false, message);

    refreshServerSideProps();

    //Success
    responseStatusFactory(true, 'Tag apagada');
    setCategoryToBeDeleted(undefined);
  }

  function tagWarningCancelClick() {
    setTagWarning(false);
    setTagToBeDeleted(undefined);
  }

  useEffect(() => {
    setIsRefreshing(false);
  }, [categories, numberOfPosts, categoryWarning, tagWarning]);

  return (
    <Container>
      <CategoriesContainer>
        <PanelBox widthPercentage={100} panelTitle="Criar nova categoria">
          <p>
            Categorias são geralmente usadas para assuntos mais abrangentes, como por exemplo
            "Front-end" que abrange uma area inteira da programação.
          </p>
          <p>Categorias serão mostradas no header do blog e tem o limite de 5 categorias por vez</p>
          <form onSubmit={handleCategorySubmit}>
            <InputLabel panel htmlFor="category" id="category">
              <input
                name="category"
                placeholder="Categoria"
                type="text"
                onChange={handleCategoryInputChange}
              />
            </InputLabel>
            <RequestButton type="submit">Criar categoria</RequestButton>
          </form>

          {categoryWarning && (
            <Warning
              title="Tem certeza disso ?"
              message="Assim que esta categoria for excluida, todos os posts nela também serão"
              confirmCallback={categoryWarningConfirmClick}
              cancelCallback={categoryWarningCancelClick}
            />
          )}
        </PanelBox>

        <PanelBox widthPercentage={100} panelTitle="Apagar categorias">
          {!categories ? (
            <p>Opa, parece que não tem nada aqui</p>
          ) : (
            categories.map((category) => (
              <CategoryBox key={category.id}>
                <p>{category.name}</p>
                <Trashcan
                  onClick={() => handleCategoryDeleteClick(category.id)}
                  color={theme.colors.errorColor}
                ></Trashcan>
              </CategoryBox>
            ))
          )}
        </PanelBox>

        <PanelBox widthPercentage={100} panelTitle="Total de posts por categoria">
          {!categories ? (
            <p>Opa, parece que não tem nada aqui</p>
          ) : (
            categoriesData.map((category) => (
              <CategoryBox key={category.name}>
                <p>{category.name}</p>
                <p>{category.posts}</p>
              </CategoryBox>
            ))
          )}
        </PanelBox>
      </CategoriesContainer>

      <TagsContainer>
        <PanelBox widthPercentage={100} panelTitle="Criar nova tag">
          <p>
            Tags são usadas para falar sobre algo mais especifico, como por exemplo "React.js", que
            é uma tecnologia Front-end
          </p>
          <form onSubmit={handleTagSubmit}>
            <InputLabel panel htmlFor="tag" id="tag">
              <input name="tag" placeholder="Tag" type="text" onChange={handleTagInputChange} />
            </InputLabel>
            <RequestButton type="submit">Criar Tag</RequestButton>
          </form>
        </PanelBox>

        <PanelBox widthPercentage={100} panelTitle="Apagar tags">
          {!tags ? (
            <p>Opa, parece que não tem nada aqui</p>
          ) : (
            tags?.map((tag) => (
              <CategoryBox key={tag.id}>
                <p>{tag.name}</p>
                <Trashcan
                  onClick={() => handleTagDeleteClick(tag.id)}
                  color={theme.colors.errorColor}
                ></Trashcan>
              </CategoryBox>
            ))
          )}

          {tagWarning && (
            <Warning
              title="Tem certeza disso ?"
              message="Assim que esta tag for excluida, ela será removida de todos os posts em que está presente"
              confirmCallback={tagWarningConfirmClick}
              cancelCallback={tagWarningCancelClick}
            />
          )}
        </PanelBox>
      </TagsContainer>
    </Container>
  );
};
