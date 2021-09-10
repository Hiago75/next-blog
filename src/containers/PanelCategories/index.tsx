import { Container, CategoryBox } from './style';
import { PanelBox, RingChart } from '../../components';

export const PanelCategories = () => {
  return (
    <Container>
      <PanelBox className="w30" panelTitle="Categorias">
        <CategoryBox>
          <p>Marketing:</p>
          <p>3</p>
        </CategoryBox>
        <CategoryBox>
          <p>Front-End:</p>
          <p>1</p>
        </CategoryBox>
        <CategoryBox>
          <p>Back-End:</p>
          <p>2</p>
        </CategoryBox>
        <CategoryBox>
          <p>TypeScript:</p>
          <p>4</p>
        </CategoryBox>
        <CategoryBox>
          <p>Python:</p>
          <p>1</p>
        </CategoryBox>
      </PanelBox>

      <PanelBox className="w40" panelTitle="Categoria dos meus posts">
        <RingChart />
      </PanelBox>
    </Container>
  );
};