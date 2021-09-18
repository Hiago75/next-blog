import { POSTS_URL } from '../../config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const url = `${POSTS_URL}`;
  const posts = await fetchJson<PostData[]>(url);

  return posts;
};
