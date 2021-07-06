import Head from 'next/head';
import Link from 'next/link';
import { PostData } from '../../domain/posts/post';
import { Header, MainContainer, Footer, Date, Comments } from '../../components/';
import { Heading, PostCover, PostDetails, LineDivider, Content } from './style';
import { BallDivider, Category } from '../../styles/global-styles';
import { APP_NAME } from '../../config';

export type PostProps = {
  post: PostData;
};

export function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>
          {post.title} - {APP_NAME}
        </title>
      </Head>
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
            <Link href={`/posts/page/1/${post.category.name.toLowerCase()}`}>
              <a>{post.category.name}</a>
            </Link>
          </Category>
        </PostDetails>
        <LineDivider />
        <PostCover src={post.cover.formats.large.url} />

        <Content dangerouslySetInnerHTML={{ __html: post.content }}></Content>
        <Comments title={post.title} slug={post.slug} />
      </MainContainer>
      <Footer />
    </>
  );
}
