import Head from 'next/head';
import { Sidebar } from '../../components/Sidebar';
import { Container, Content } from './style';

export const Panel = () => {
  return (
    <Container>
      <Head>
        <title>NextBlog | Admin</title>
      </Head>
      <Sidebar />
      <Content>
        <h2>Hello World</h2>
      </Content>
    </Container>
  );
};
