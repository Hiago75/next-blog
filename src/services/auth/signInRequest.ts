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
    .catch((error) => {
      console.log(error.response.data.error);
      return;
    });

  if (!response) return;

  const { token }: { token: string } = await response.data;
  if (!token) return;

  const { name, email, sub } = jwtDecode<IUser>(token);
  const user = { name, email, sub };

  return { token, user };
};
