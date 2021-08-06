import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';
import { handleToken } from './middlewares/handleToken';

//Request the user data to External API using access token
const retrieveData = async (req: NextApiRequest, res: NextApiResponse) => {
  await externalApi
    .post('/auth/retrieve')
    .then((response) => {
      const user = response.data.user;
      return res.status(response.status).send(user);
    })
    .catch((error) => {
      if (error.response) return res.status(error.response.status).json(error.response.data);
      return res.status(500).json('Internal server error');
    });
};

export default handleToken(retrieveData);
