import { externalApi } from '../../config/api-config';

interface ICreateNewPost {
  title: string;
  content: string;
  tagIds: string[];
  categoryId: string;
  coverId?: string;
  photoUrl?: string;
}

export async function createNewPost({
  title,
  content,
  tagIds,
  categoryId,
  coverId,
  photoUrl,
}: ICreateNewPost) {
  return externalApi
    .post('/posts', { title, content, tagIds, categoryId, coverId, photoUrl })
    .then((response) => {
      return { error: false, message: response.data.message };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
}
