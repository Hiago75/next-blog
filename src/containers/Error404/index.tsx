import Link from 'next/link';

import { Container, Illustration, Cta, IllustrationBox } from './style';
import { MainContainer } from '../../components';

export const Error404 = () => {
  return (
    <Container>
      <IllustrationBox>
        <Illustration />
      </IllustrationBox>
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
  );
};
