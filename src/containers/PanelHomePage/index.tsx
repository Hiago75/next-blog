import { IUser } from '../../interfaces/IUser';
import { BarChart, PanelBox } from '../../components';
import { AiOutlineFileAdd } from 'react-icons/ai';

import { PanelTitle, Panels, Content, ContentField, LinkButton } from './style';

interface PanelHomePageProps {
  user: IUser;
}

export const PanelHomePage = ({ user }: PanelHomePageProps) => {
  return (
    <>
      {/* TODO: Add real data */}
      <Panels>
        <PanelBox className="w80" panelTitle="Número de posts por usuário">
          <BarChart></BarChart>
        </PanelBox>

        <PanelBox className="w20 center" panelTitle="Total de posts">
          <h1>4</h1>
        </PanelBox>

        <PanelBox className="w50" panelTitle="Meus posts" contentClassName="flexContent">
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
