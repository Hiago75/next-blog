import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';

import { Container, CategoryBox, Trashcan } from './style';
import { PanelBox, PanelButton, InputLabel, Warning } from '../../components';

import createFormErrorHandler from '../../utils/createFormErrorHandler';
import { PostCategory, PostCount } from '../../domain/posts/post';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { createNewCategory, deleteCategory, refreshUserToken } from '../../services';
import { RequestContext } from '../../contexts/RequestContext';

interface IDashboardCategoriesRequest {
  categories: PostCategory[];
  numberOfPosts: PostCount;
}

export const DashboardCategories = ({ categories, numberOfPosts }: IDashboardCategoriesRequest) => {
  const theme = useContext(ThemeContext);
  const { setLoading, responseStatusFactory, refreshServerSideProps, setIsRefreshing } =
    useContext(RequestContext);

  const [newCategory, setNewCategory] = useState('');
  const [categoryToBeDeleted, setCategoryToBeDeleted] = useState('');
  const [warning, setWarning] = useState(false);

  const { resetInputErrors, createInputError } = createFormErrorHandler();

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
    resetInputErrors();
  }

  // Submit the new category
  async function handleCategorySubmit(event: React.FormEvent) {
    event.preventDefault();
    await refreshUserToken();
    resetInputErrors();

    setLoading(true);
    const { error, message } = await createNewCategory(newCategory);
    setLoading(false);

    //Fail
    if (error) return createInputError('category', message);

    //Success
    refreshServerSideProps();

    responseStatusFactory(
      true,
      'Nova categoria criada',
      'Você já pode criar publicações nesta categoria',
    );
  }

  //Open the warning and store the id
  async function handleDeleteClick(categoryId: string) {
    setCategoryToBeDeleted(categoryId);
    setWarning(true);
  }

  // Callback that will be executed when the user confirm the warning box, basically deletes the category
  async function warningConfirmClick() {
    setWarning(false);
    setLoading(true);
    await refreshUserToken();
    const { error, message } = await deleteCategory(categoryToBeDeleted);
    setLoading(false);

    //Fail
    if (error) return responseStatusFactory(false, 'Opa, algo deu errado', message);

    refreshServerSideProps();

    //Success
    responseStatusFactory(true, 'Categoria apagada', 'Ela partiu...');
    setCategoryToBeDeleted('');
  }

  // Function that will be executed when the user cancel the warning box, just closes the box
  function warningCancelClick() {
    setWarning(false);
    setCategoryToBeDeleted('');
  }

  useEffect(() => {
    setIsRefreshing(false);
  }, [categories, numberOfPosts, warning]);

  return (
    <Container>
      {warning && (
        <Warning
          title="Tem certeza disso ?"
          message="Assim que esta categoria for excluida, todos os posts nela também serão"
          confirmCallback={warningConfirmClick}
          cancelCallback={warningCancelClick}
        />
      )}

      <PanelBox widthPercentage={100} panelTitle="Criar nova categoria">
        <form onSubmit={handleCategorySubmit}>
          <InputLabel panel htmlFor="category" id="category">
            <input
              name="category"
              placeholder="Categoria"
              type="text"
              onChange={handleCategoryInputChange}
            />
          </InputLabel>
          <PanelButton type="submit">Criar categoria</PanelButton>
        </form>
      </PanelBox>

      <PanelBox widthPercentage={50} panelTitle="Apagar categorias">
        {categories.map((category) => (
          <CategoryBox key={category.id}>
            <p>{category.name}</p>
            <Trashcan
              onClick={() => handleDeleteClick(category.id)}
              color={theme.colors.errorColor}
            ></Trashcan>
          </CategoryBox>
        ))}
      </PanelBox>

      <PanelBox widthPercentage={50} panelTitle="Total de posts por categoria">
        {categoriesData.map((category) => (
          <CategoryBox key={category.name}>
            <p>{category.name}</p>
            <p>{category.posts}</p>
          </CategoryBox>
        ))}
      </PanelBox>
    </Container>
  );
};
