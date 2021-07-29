import { api } from '../../config/api-config';

export const getUserData = async (tokenToSearch: string) => {
  try {
    const response = await api.post('/auth/retrieve', {
      token: tokenToSearch,
    });

    const data = await response.data;
    const { name, email, id } = data.user;
    const user = { sub: id, name, email };

    return user;
  } catch (e) {
    console.log(e);
  }
};
