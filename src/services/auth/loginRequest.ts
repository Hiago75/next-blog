import { internalApi } from '../../config/api-config';
import { ILoginRequest } from '../../interfaces/ILoginRequest';

export const loginRequest = async ({ email: username, password }: ILoginRequest) => {
  return await internalApi
    .post('/api/login', {
      username,
      password,
    })
    .then(() => {
      return { error: false, message: 'Access granted' };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
};
