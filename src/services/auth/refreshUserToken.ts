import { logoutUser } from '../../utils/logoutUser';
import { externalApi } from '../../config/api-config';

// Try to fetch user data from API
export const refreshUserToken = async () => {
  return await externalApi
    .get('/auth/refresh')
    .then(() => {
      return { error: false, message: 'Ok' };
    })
    .catch(async (error) => {
      await logoutUser();
      console.log('erro no refresh mano ', error.response.data.message);
      return { error: true, message: error.response.data.message };
    });
};
