import { api } from '../../config/api-config';

export const renewUserData = async (tokenToSearch: string) => {
  try {
    const response = await api.post('/auth/retrieve', {
      token: tokenToSearch,
    });

    const { user } = await response.data;

    return user;
  } catch (e) {
    console.log(e);
  }
};
