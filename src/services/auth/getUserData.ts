import { api } from '../../config/api-config';
import { logout } from '../../utils/logout';

// Try to fetch user data from API
export const getUserData = async (tokenToSearch: string) => {
  const response = await api
    .post('/auth/retrieve', {
      token: tokenToSearch,
    })
    .catch((error) => {
      //If API send error logout the user and show message
      logout(error.response.data.error);
    });

  if (!response) return;

  const data = await response.data;

  const { name, email, id } = data.user;
  const user = { sub: id, name, email };

  return user;
};
