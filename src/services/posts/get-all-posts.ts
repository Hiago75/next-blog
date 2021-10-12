import { POSTS_URL } from '../../config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (category?: string): Promise<PostData[]> => {
  const url = category ? `${POSTS_URL}?_category=${category}` : `${POSTS_URL}`;
  const posts = await fetchJson<PostData[]>(url);

  return posts;
};
