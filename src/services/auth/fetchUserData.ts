import { logoutUser } from '../../utils/logoutUser';
import { internalApi } from '../../config/api-config';
import { refreshUserToken } from './refreshUserToken';

// Try to fetch user data from API
export const fetchUserData = async (refreshToken: boolean) => {
  if (refreshToken) await refreshUserToken();

  return await internalApi
    .post('/api/retrieve', {
      refreshToken: true,
    })
    .then((response) => {
      console.log('tamo ai');
      return response.data;
    })
    .catch(() => {
      logoutUser();
      return { error: true, message: 'Não foi possível recuperar os dados do usuário' };
    });
};
