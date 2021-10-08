import { GetStaticPaths, GetStaticProps } from 'next';

import { getAllPosts, getPost } from '../../services';
import { PostData } from '../../domain/posts/post';
import { Post } from '../../containers/BlogPost';
import Custom404 from '../404';

export type DynamicPostProps = {
  post: PostData;
};

export default function DynamicPost({ post }: DynamicPostProps) {
  if (!post?.title) return <Custom404></Custom404>;

  return <Post post={post} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();

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
