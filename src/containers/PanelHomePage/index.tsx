import { IUser } from '../../interfaces/IUser';
import { BarChart, PanelButton } from '../../components';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { ContentPanel, PanelTitle, Panels, Content, ContentField } from './style';

interface PanelHomePageProps {
  user: IUser;
}

export const PanelHomePage = ({ user }: PanelHomePageProps) => {
  return (
    <>
      {/* TODO: Add real data */}
      <Panels>
        <ContentPanel className="w80">
          <PanelTitle>Número de posts por usuário</PanelTitle>
          <Content>
            <BarChart></BarChart>
          </Content>
        </ContentPanel>

        <ContentPanel className="w20">
          <PanelTitle>Total de posts:</PanelTitle>

          <Content>
            <h1>4</h1>
          </Content>
        </ContentPanel>

        <ContentPanel className="w40">
          <PanelTitle>Meus posts</PanelTitle>
          <Content className="flexContent">
            <ContentField>
              <p>Categorias:</p>
              <h3>Python</h3>
              <h3>TypeScript</h3>
            </ContentField>
            <ContentField>
              <p>Quantidade por categorias:</p>
              <h3>Python - 1</h3>
              <h3>TypeScript - 3</h3>
            </ContentField>
          </Content>
        </ContentPanel>

        <ContentPanel className="w20">
          <AiOutlineFileAdd size={50} color="#5A8BD6" />
          <PanelTitle>Novo post</PanelTitle>
          <Content>
            <p>Quer criar uma nova publicação ?</p>
          </Content>
          <PanelButton>Criar post</PanelButton>
        </ContentPanel>
      </Panels>
    </>
  );
};
