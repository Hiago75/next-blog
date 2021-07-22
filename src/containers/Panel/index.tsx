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
        <svg
          xmlns="http://www.w3.org/2000/none"
          viewBox="0 0 1440 320"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="#4877d3"
            fillOpacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,234.7C384,256,480,256,576,224C672,192,768,128,864,117.3C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
          <text x="80" y="90" fontSize="37" fontWeight="bold" fill="#0a0c21">
            Olá, Hiago
          </text>
        </svg>
      </Content>
    </Container>
  );
};
