import { IUser } from '../../interfaces/IUser';
import { BarChart, PanelBox } from '../../components';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { PanelTitle, Panels, Content, ContentField, LinkButton } from './style';
import { PostCount } from '../../domain/posts/post';

interface PanelHomePageProps {
  user: IUser;
  numberOfPosts: PostCount;
}

export const PanelHomePage = ({ user, numberOfPosts }: PanelHomePageProps) => {
  const authors = numberOfPosts.authors;

  function getChartData() {
    const labels: string[] = [];
    const numbers: number[] = [];

    for (const authorName in authors) {
      const author = authors[authorName];

      labels.push(authorName);
      numbers.push(author.posts);
    }

    return { labels, numbers };
  }

  function getUserPostData() {
    const author = authors[user?.name];
    const rawCategories = author?.categories;

    const categories: { name: string; posts: number }[] = [];

    for (const category in rawCategories) {
      const categoryObject = { name: category, posts: rawCategories[category] };
      categories.push(categoryObject);
    }

    return { categories };
  }

  getUserPostData();

  const { labels, numbers } = getChartData();

  const { categories } = getUserPostData();

  return (
    <>
      <Panels>
        <PanelBox className="w80" panelTitle="Número de posts por usuário">
          <BarChart datasetLabel="Posts" labels={labels} numbers={numbers}></BarChart>
        </PanelBox>

        <PanelBox className="w20 center" panelTitle="Total de posts">
          <h1>{numberOfPosts.total}</h1>
        </PanelBox>

        <PanelBox className="w50" panelTitle="Meus posts" contentClassName="flexContent">
          <ContentField>
            <p>Categorias:</p>
            {categories.map((category) => {
              if (category.posts >= 1) {
                return <h3 key={category.name}>{category.name}</h3>;
              }
            })}
          </ContentField>
          <ContentField>
            <p>Quantidade por categoria:</p>
            {categories.map((category) => {
              if (category.posts >= 1)
                return (
                  <h3 key={category.name}>
                    {category.name} - {category.posts}
                  </h3>
                );
            })}
          </ContentField>
        </PanelBox>

        <PanelBox className="w30 center">
          <AiOutlineFileAdd size={50} color="#5A8BD6" />
          <PanelTitle>Novo post</PanelTitle>
          <Content>
            <p>Quer criar uma nova publicação ?</p>
          </Content>
          <LinkButton href="dashboard/posts">Criar post</LinkButton>
        </PanelBox>
      </Panels>
    </>
  );
};
