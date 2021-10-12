import { API_URL } from '../../config/api-config';
import { PostCategory } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export async function getAllCategories() {
  const url = `${API_URL}/categories`;
  const categories = await fetchJson<PostCategory[]>(url);

  return categories;
}
