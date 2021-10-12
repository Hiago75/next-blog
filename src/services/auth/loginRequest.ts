import { externalApi } from '../../config/api-config';
import { ILoginRequest } from '../../interfaces/ILoginRequest';

export const loginRequest = async ({ email, password }: ILoginRequest) => {
  return await externalApi
    .post('/auth/login', {
      email,
      password,
    })
    .then(() => {
      return { error: false, message: 'Access granted' };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
};
