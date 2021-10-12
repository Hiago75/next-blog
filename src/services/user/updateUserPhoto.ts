import FormData from 'form-data';
import { externalApi } from '../../config/api-config';

// Update the user profile photo
export const updateUserPhoto = async ({ photo }: { photo: File }) => {
  const formData = new FormData();
  formData.append('image', photo, photo.name);

  return await externalApi
    .put('/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
    .then((response) => {
      return response.data.message;
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
};
