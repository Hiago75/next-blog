import axios from 'axios';
import { ILoginRequest } from '../../interfaces/ILoginRequest';

export const signInRequest = async ({ email: username, password }: ILoginRequest) => {
  return await axios
    .post('http://127.0.0.1:3000/api/login', {
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
