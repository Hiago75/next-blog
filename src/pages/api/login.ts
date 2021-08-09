import cookie from 'cookie';

import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';

//Request the server to auth the user and return a token, then create cookies with the access token and the refresh token.
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

      const tokenExpiration = response.data.accessTokenExpiration;
      const refreshTokenExpiration = response.data.refreshTokenExpiration;

      const formatedTokenExpiration = new Date(tokenExpiration * 1000);
      const formatedRefreshTokenExpiration = new Date(refreshTokenExpiration * 1000);

      const cookies = [
        cookie.serialize('access_token', token, {
          httpOnly: true,
          secure: true,
          expires: formatedTokenExpiration,
          sameSite: 'strict',
          path: '/',
        }),

        'Set-Cookie',
        cookie.serialize('refresh_token', refreshToken, {
          httpOnly: true,
          secure: true,
          expires: formatedRefreshTokenExpiration,
          sameSite: 'strict',
          path: '/',
        }),
      ];

      res.setHeader('Set-Cookie', cookies);

      return res.status(response.status).json('Access granted');
    })
    .catch((error) => {
      if (error.response) return res.status(error.response.status).json(error.response.data);
      return res.status(500).json('Internal server error');
    });
};
