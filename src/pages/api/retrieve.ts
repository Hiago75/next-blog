import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';

//Request the user data to External API using access token
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { access_token, refresh_token } = req.cookies;

  await externalApi
    .post(
      '/auth/retrieve',
      {},
      {
        headers: { Authorization: access_token, cookie: refresh_token },
      },
    )
    .then((response) => {
      const user = response.data.user;
      return res.status(response.status).send(user);
    })
    .catch((error) => {
      return res.status(error.response.status).send(error.response.data.error);
    });
};
