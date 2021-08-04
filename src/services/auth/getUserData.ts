import { logoutUser } from '../../utils/logout';
import { internalApi } from '../../config/api-config';

// Try to fetch user data from API
export const getUserData = async () => {
  return await internalApi
    .post('/api/retrieve')
    .then((response) => response.data)
    .catch(() => {
      logoutUser();
      return;
    });
};
