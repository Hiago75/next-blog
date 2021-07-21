import Head from 'next/head';
import { Container } from './style';

export const Panel = () => {
  return (
    <>
      <Head>
        <title>NextBlog | Admin</title>
      </Head>
      <Container>
        <h2>Hello World</h2>
      </Container>
    </>
  );
};
