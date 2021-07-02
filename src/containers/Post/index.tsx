import { PostData } from '../../domain/posts/post';
import { Header, MainContainer, Footer } from '../../components/';

export type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
      </MainContainer>
      <Footer />
    </>
  );
}
