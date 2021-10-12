import { externalApi } from '../../config/api-config';

// Try to fetch user data from API
export const updateUserData = async ({ name, email }) => {
  return await externalApi
    .put('/authors', {
      name,
      email,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
};
