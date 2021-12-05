import { externalApi } from '../../config/api-config';

interface IUpdatePost {
  postId: string;
  title: string;
  content: string;
  categoryId: string;
  coverId?: string;
  photoUrl?: string;
}

export async function updatePost({
  postId,
  title,
  content,
  categoryId,
  coverId,
  photoUrl,
}: IUpdatePost) {
  try {
    const response = await externalApi.put(`/posts/${postId}`, {
      title,
      content,
      categoryId,
      coverId,
      externalPhotoUrl: photoUrl,
    });
    return { error: false, message: response.data.message };
  } catch (error) {
    return { error: true, message: error.response.data.message };
  }
}
