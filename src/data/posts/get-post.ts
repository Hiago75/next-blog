import { POSTS_URL } from '../../config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugSting = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?slug=${slugSting}`;
  const jsonPosts = await fetchJson<PostData[]>(url);

  return jsonPosts;
};
