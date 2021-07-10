import Head from 'next/head';

import { Header, Footer } from '../components';
import { Error404 } from '../containers';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | NextBlog</title>
      </Head>
      <Header />
      <Error404></Error404>
      <Footer />
    </>
  );
}
