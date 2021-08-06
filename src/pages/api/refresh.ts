import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';
import { handleToken } from './middlewares/handleToken';

//Request the user data to External API using access token
const refreshAccessToken = async (req: NextApiRequest, res: NextApiResponse) => {
  await externalApi
    .get('/auth/refresh')
    .then((response) => {
      const token = response.data.token;
      const tokenExpiration = response.data.tokenExpiration;
      const formatedTokenExpiration = new Date(tokenExpiration * 1000);

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('access_token', token, {
          httpOnly: true,
          secure: true,
          expires: formatedTokenExpiration,
          sameSite: 'lax',
          path: '/',
        }),
      );

      return res.status(200).send('Ok');
    })
    .catch((error) => {
      if (error.response) return res.status(error.response.status).json(error.response.data);
      return res.status(500).json('Internal server error');
    });
};

export default handleToken(refreshAccessToken);
