import { PostData } from '../../domain/posts/post';
import { Header, MainContainer, Footer } from '../../components/';
import { Heading, PostCover, PostDetails, LineDivider, Content } from './style';
import { Date } from '../../components/Date';
import { BallDivider, Category } from '../../styles/global-styles';

export type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.title}</Heading>
        <LineDivider />
        <PostDetails>
          <h5>
            Posted by <a href="#">{post.author.name}</a>
          </h5>

          <p>
            <Date date={post.created_at} />
          </p>
          <BallDivider />
          <Category>
            <a>{post.category.name}</a>
          </Category>
        </PostDetails>
        <LineDivider />
        <PostCover src={post.cover.formats.large.url} />

        <Content dangerouslySetInnerHTML={{ __html: post.content }}></Content>
      </MainContainer>
      <Footer />
    </>
  );
}
