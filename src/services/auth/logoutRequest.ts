import { internalApi } from '../../config/api-config';

export const logoutRequest = async () => {
  return internalApi
    .delete('/api/logout')
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response.data.error;
    });
};
