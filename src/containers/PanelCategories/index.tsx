import { useState } from 'react';

import { Container, CategoryBox, PanelInput } from './style';
import { PanelBox, PanelButton } from '../../components';
import { PostCount } from '../../domain/posts/post';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { createNewCategory } from '../../services';

interface IPanelCategoriesRequest {
  numberOfPosts: PostCount;
}

export const PanelCategories = ({ numberOfPosts }: IPanelCategoriesRequest) => {
  const [newCategory, setNewCategory] = useState('');

  // Format the received categories into an array of objects
  function getCategoriesData() {
    const rawCategories = numberOfPosts.categories;
    const categories: { name: string; posts: number }[] = [];

    for (const category in rawCategories) {
      const categoryObject = { name: category, posts: rawCategories[category] };
      categories.push(categoryObject);
    }

    return { categories };
  }

  const { categories } = getCategoriesData();

  // Handle category input change
  function handleCategoryInputChange(event: IOnChangeInput) {
    setNewCategory(event.target.value);
  }

  // Submit the new category
  async function handleCategorySubmit(event: React.FormEvent) {
    event.preventDefault();
    const { error, message } = await createNewCategory(newCategory);

    if (error) return alert(message);

    window.location.reload();
  }

  return (
    <Container>
      <PanelBox widthPercentage={50} panelTitle="Criar nova categoria">
        <form onSubmit={handleCategorySubmit}>
          <PanelInput onChange={handleCategoryInputChange} placeholder="Categoria..." type="text" />
          <PanelButton type="submit">Criar categoria</PanelButton>
        </form>
      </PanelBox>
      <PanelBox widthPercentage={50} panelTitle="Total de posts por categoria">
        {categories.map((category) => (
          <CategoryBox key={category.name}>
            <p>{category.name}</p>
            <p>{category.posts}</p>
          </CategoryBox>
        ))}
      </PanelBox>
    </Container>
  );
};
