import jwtDecode from 'jwt-decode';
import { api } from '../../config/api-config';
import { ILoginRequest } from '../../interfaces/ILoginRequest';
import { IUser } from '../../interfaces/IUser';

export const signInRequest = async ({ email: username, password }: ILoginRequest) => {
  const response = await api
    .post('/auth/login', {
      email: username,
      password,
    })
    .then(async (response) => {
      const token = response.data.token;
      if (!token) return;

      const { name, email, sub } = jwtDecode<IUser>(token);
      const user = { name, email, sub };

      return { token, user };
    })
    .catch((error) => {
      return error.response.data;
    });

  return response;
};
