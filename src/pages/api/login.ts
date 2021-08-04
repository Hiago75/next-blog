import { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import { externalApi } from '../../config/api-config';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  await externalApi
    .post('/auth/login', {
      email: username,
      password,
    })
    .then(async (response) => {
      const token = response.data.accessToken;
      const refreshToken = response.data.refreshToken;
      const refreshTokenExpiration = response.data.refreshTokenExpiration;

      const cookies = [
        cookie.serialize('access_token', token, {
          httpOnly: true,
          secure: true,
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
        }),

        'Set-Cookie',
        cookie.serialize('refresh_token', refreshToken, {
          httpOnly: true,
          secure: true,
          maxAge: refreshTokenExpiration,
          sameSite: 'strict',
          path: '/',
        }),
      ];

      res.setHeader('Set-Cookie', cookies);

      res.status(response.status).send('Access granted');
    })
    .catch((error) => {
      return res.status(error.response.status).send(error.response.data);
    });
};
