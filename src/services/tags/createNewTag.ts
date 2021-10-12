import { externalApi } from '../../config/api-config';

export async function createNewTag(tagName: string) {
  return await externalApi
    .post('/tags', { name: tagName })
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
