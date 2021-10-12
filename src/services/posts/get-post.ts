import { POSTS_URL } from '../../config';
import { PostData } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}/post/${slugString}`;
  const jsonPost = await fetchJson<PostData>(url);

  return jsonPost;
};
