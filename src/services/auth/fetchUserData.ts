import { logoutUser } from '../../utils/logoutUser';
import { externalApi } from '../../config/api-config';
import { refreshUserToken } from './refreshUserToken';

// Try to fetch user data from API
export const fetchUserData = async (hasRefreshToken: boolean) => {
  if (hasRefreshToken) await refreshUserToken();

  return await externalApi
    .get('/auth/retrieve')
    .then((response) => {
      return response.data.user;
    })
    .catch(async () => {
      await logoutUser();
      return { error: true, message: 'Não foi possível recuperar os dados do usuário' };
    });
};
