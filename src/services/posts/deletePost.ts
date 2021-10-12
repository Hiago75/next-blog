import { externalApi } from '../../config/api-config';

export async function deletePost(postId: string) {
  return await externalApi
    .delete(`/posts/${postId}`)
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
