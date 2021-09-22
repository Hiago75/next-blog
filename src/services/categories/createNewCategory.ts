import { externalApi } from '../../config/api-config';

export async function createNewCategory(categoryName: string) {
  return await externalApi
    .post('/categories', { name: categoryName })
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
