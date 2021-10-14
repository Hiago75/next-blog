import Link from 'next/link';

import { BlogButton } from '../../components';
import { Container, Cta, IllustrationBox } from './style';

export const Error404 = () => {
  return (
    <Container>
      <IllustrationBox>
        <img src="/assets/lost.svg" />
      </IllustrationBox>

      <Cta>
        <h1>404...</h1>
        <h2>Oops! Parece que não tem nada aqui</h2>

        <Link href="/">
          <a>
            <BlogButton>Retornar a página principal</BlogButton>
          </a>
        </Link>
      </Cta>
    </Container>
  );
};
