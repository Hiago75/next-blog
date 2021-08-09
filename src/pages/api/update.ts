import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';
import { handleToken } from './middlewares/handleToken';

//Request the user data to External API using access token
const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;

  await externalApi
    .put('/authors/update', {
      name,
      email,
    })
    .then((response) => {
      const user = response.data.user;
      return res.send(user);
    })
    .catch((error) => {
      console.log(error);
      if (error.response) return res.status(error.response.status).json(error.response.data);
      return res.status(500).json('Internal server error');
    });
};

export default handleToken(updateUser);
