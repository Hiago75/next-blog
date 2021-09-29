import { GetStaticPaths, GetStaticProps } from 'next';

import { countAllPosts, getAllPosts, getPost } from '../../services';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/Post';
import Custom404 from '../404';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  if (!post?.title) return <Custom404></Custom404>;

  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numOfPosts = await countAllPosts();
  const posts = await getAllPosts(`_limit=${numOfPosts}`);

  return {
    paths: posts.map((post) => {
      return { params: { slug: post.slug } };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPost(context.params.slug);

  return {
    props: { post },
  };
};
