import { GetStaticPaths, GetStaticProps } from 'next';

import { countAllPosts, getAllPosts, getPost } from '../../data/posts';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/Post';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
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
  const posts = await getPost(context.params.slug);

  return {
    props: { post: posts[0] },
  };
};
