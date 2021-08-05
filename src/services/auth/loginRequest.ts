import { internalApi } from '../../config/api-config';
import { ILoginRequest } from '../../interfaces/ILoginRequest';

export const signInRequest = async ({ email: username, password }: ILoginRequest) => {
  return await internalApi
    .post('/api/login', {
      username,
      password,
    })
    .then(() => {
      return { error: false };
    })
    .catch((e) => {
      return { error: true, message: e.response.data.error };
    });
};
