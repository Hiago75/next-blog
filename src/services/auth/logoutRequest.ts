import { externalApi } from '../../config/api-config';

export const logoutRequest = async () => {
  return externalApi
    .delete('/auth/logout')
    .then((response) => {
      return response;
    })
    .catch((e) => {
      return e.response?.data.error;
    });
};
