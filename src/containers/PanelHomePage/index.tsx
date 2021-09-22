import { IUser } from '../../interfaces/IUser';
import { BarChart, PanelBox, RingChart } from '../../components';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { PanelTitle, Panels, Content, LinkButton } from './style';
import { PostCount } from '../../domain/posts/post';

interface PanelHomePageProps {
  user: IUser;
  numberOfPosts: PostCount;
}

export const PanelHomePage = ({ user, numberOfPosts }: PanelHomePageProps) => {
  const authors = numberOfPosts.authors;

  function getChartData() {
    const numOfPostsLabels: string[] = [];
    const numOfPostsNumbers: number[] = [];

    for (const authorName in authors) {
      const author = authors[authorName];

      numOfPostsLabels.push(authorName);
      numOfPostsNumbers.push(author.posts);
    }

    return { numOfPostsLabels, numOfPostsNumbers };
  }

  function getUserPostData() {
    const author = authors[user?.name];
    const categories = author?.categories;

    const numOfUserPostsLabels: string[] = [];
    const numOfUserPostsNumbers: number[] = [];

    for (const categoryName in categories) {
      numOfUserPostsLabels.push(categoryName);
      numOfUserPostsNumbers.push(categories[categoryName]);
    }

    return { numOfUserPostsLabels, numOfUserPostsNumbers };
  }

  const { numOfPostsLabels, numOfPostsNumbers } = getChartData();

  const { numOfUserPostsLabels, numOfUserPostsNumbers } = getUserPostData();

  return (
    <>
      <Panels>
        <PanelBox widthPercentage={64} panelTitle="Número de posts por usuário">
          <BarChart
            datasetLabel="Posts"
            labels={numOfPostsLabels}
            numbers={numOfPostsNumbers}
          ></BarChart>
        </PanelBox>

        <PanelBox widthPercentage={36} panelTitle="Meus posts por categoria">
          <RingChart labels={numOfUserPostsLabels} numbers={numOfUserPostsNumbers}></RingChart>
        </PanelBox>

        <PanelBox widthPercentage={30} className="center">
          <AiOutlineFileAdd size={50} color="#5A8BD6" />
          <PanelTitle>Novo post</PanelTitle>
          <Content>
            <p>Que tal mexer nesses números ? Crie uma nova publicação!</p>
          </Content>
          <LinkButton href="dashboard/posts">Criar post</LinkButton>
        </PanelBox>

        <PanelBox widthPercentage={20} className="center" panelTitle="Total de posts">
          <h1>{numberOfPosts.total}</h1>
        </PanelBox>
      </Panels>
    </>
  );
};
