import { externalApi } from '../../config/api-config';

export function updatePost(
  postId: string,
  title: string,
  content: string,
  categoryId: string,
  coverId: string,
) {
  return externalApi
    .put(`/posts/${postId}`, { title, content, categoryId, coverId })
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      console.log(error);
      return { error: true, message: error.response.data.message };
    });
}
