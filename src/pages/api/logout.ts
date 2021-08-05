import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';

//Request the server to delete the sent refresh-token and destroy the cookies
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { access_token, refresh_token } = req.cookies;

  await externalApi
    .delete('/auth/logout', {
      headers: { Authorization: access_token, cookie: refresh_token },
    })
    .then(() => {
      const cookies = [
        cookie.serialize('access_token', '', {
          httpOnly: true,
          secure: true,
          expires: new Date(0),
          sameSite: 'strict',
          path: '/',
        }),

        'Set-Cookie',
        cookie.serialize('refresh_token', '', {
          httpOnly: true,
          secure: true,
          expires: new Date(0),
          sameSite: 'strict',
          path: '/',
        }),
      ];

      res.setHeader('Set-Cookie', cookies);
      return res.status(200).json('User succesfully logged out');
    })
    .catch((error) => {
      return res.status(error.response.status).send(error.response.data.error);
    });
};
