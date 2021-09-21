import FormData from 'form-data';
import { externalApi } from '../../config/api-config';

// Update the user profile photo
export const createUserPhoto = async ({ profilePhoto }: { profilePhoto: File }) => {
  const formData = new FormData();
  formData.append('image', profilePhoto, profilePhoto.name);

  return await externalApi
    .post('/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error: true, message: 'Não foi possível atualizar a foto do usuário' };
    });
};
