import { externalApi } from '../../config/api-config';

export async function deleteCategory(categoryId: string) {
  return await externalApi
    .delete(`/categories/${categoryId}`)
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
