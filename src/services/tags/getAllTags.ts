import { fetchJson } from '../../utils';
import { API_URL } from '../../config';
import { PostTags } from '../../domain/posts/post';

export const getAllTags = () => {
  const url = `${API_URL}/tags`;
  const tags = fetchJson<PostTags[]>(url);

  return tags;
};
