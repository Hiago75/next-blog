import { logoutUser } from '../../utils/logoutUser';
import { externalApi } from '../../config/api-config';

// Try to fetch user data from API
export const updateUserData = async ({ name, email }) => {
  return await externalApi
    .put('/authors', {
      name,
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch(async () => {
      await logoutUser();
      return { error: true, message: 'Não foi possível recuperar os dados do usuário' };
    });
};
