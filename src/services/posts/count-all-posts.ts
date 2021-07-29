import { POSTS_URL } from '../../config';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
  const url = `${POSTS_URL}/count?${query}`;
  const numOfPosts = await fetchJson<string>(url);

  return numOfPosts;
};
