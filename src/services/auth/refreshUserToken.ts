import { logoutUser } from '../../utils/logoutUser';
import { internalApi } from '../../config/api-config';

// Try to fetch user data from API
export const refreshUserToken = async () => {
  return await internalApi
    .get('/api/refresh')
    .then(() => {
      return { error: false, message: 'Ok' };
    })
    .catch(async (error) => {
      await logoutUser();
      return { error: true, message: error.response.data.error };
    });
};
