import { externalApi } from '../../config/api-config';

export const createUser = ({ name, email, password, admin }) => {
  return externalApi
    .post('/authors', { name, email, password, admin })
    .then((response) => {
      return { error: false, message: response.data };
    })
    .catch((error) => {
      return { error: true, message: error.response.data.message };
    });
};
