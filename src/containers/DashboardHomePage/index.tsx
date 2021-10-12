import { Bar, Doughnut } from 'react-chartjs-2';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { IUser } from '../../interfaces/IUser';
import { PanelBox } from '../../components';

import { PanelTitle, Panels, Content, LinkButton } from './style';
import { PostCount } from '../../domain/posts/post';
import { baseChart } from '../../utils/base-chart';

interface IDashboardHomePageProps {
  user: IUser;
  numberOfPosts: PostCount;
}

export const DashboardHome = ({ user, numberOfPosts }: IDashboardHomePageProps) => {
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
      if (categories[categoryName] >= 1) {
        numOfUserPostsLabels.push(categoryName);
        numOfUserPostsNumbers.push(categories[categoryName]);
      }
    }

    return { numOfUserPostsLabels, numOfUserPostsNumbers };
  }

  const { numOfPostsLabels, numOfPostsNumbers } = getChartData();
  const numOfPostsChartData = baseChart(numOfPostsLabels, numOfPostsNumbers, 'Posts');

  const { numOfUserPostsLabels, numOfUserPostsNumbers } = getUserPostData();
  const numOfUserPostsData = baseChart(numOfUserPostsLabels, numOfUserPostsNumbers);

  return (
    <>
      <Panels>
        <PanelBox widthPercentage={64} panelTitle="Número de posts por usuário">
          <Bar data={numOfPostsChartData.data} />
        </PanelBox>

        <PanelBox widthPercentage={36} panelTitle="Meus posts por categoria">
          <Doughnut data={numOfUserPostsData.data} />
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
