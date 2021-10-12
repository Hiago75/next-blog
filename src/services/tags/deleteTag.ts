import { externalApi } from '../../config/api-config';

export async function deleteTag(tagId: string) {
  return await externalApi
    .delete(`/tags/${tagId}`)
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
