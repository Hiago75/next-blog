import { POSTS_URL } from '../../config';
import { PostCount } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (): Promise<PostCount> => {
  const url = `${POSTS_URL}/count`;
  const numOfPosts = await fetchJson<PostCount>(url);

  return numOfPosts;
};
