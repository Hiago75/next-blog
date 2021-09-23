import { externalApi } from '../../config/api-config';

export async function createNewPost(
  title: string,
  content: string,
  categoryId: string,
  coverId: string,
) {
  return await externalApi
    .post('/posts', { title, content, categoryId, coverId })
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
