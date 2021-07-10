import Link from 'next/link';

import { GiTreasureMap } from 'react-icons/gi';
import { Container, Illustration, Cta } from './style';
import { MainContainer } from '../../components';

export const Error404 = () => {
  return (
    <MainContainer>
      <Container>
        <Illustration>
          <GiTreasureMap size={400} />
        </Illustration>
        <Cta>
          <h1>404...</h1>
          <h2>Oops! Parece que não tem nada aqui</h2>
          <p>Acho melhor olhar o seu mapa e voltar a trilha do tesouro</p>
          <Link as="/posts/page/1" href="/posts/page/[...param]">
            <button>
              <a>Retornar a trilha</a>
            </button>
          </Link>
        </Cta>
      </Container>
    </MainContainer>
  );
};
