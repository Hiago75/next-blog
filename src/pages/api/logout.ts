import cookie from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../config/api-config';
import { handleToken } from './middlewares/handleToken';

//Request the server to delete the sent refresh-token and destroy the cookies
const logout = async (req: NextApiRequest, res: NextApiResponse) => {
  await externalApi
    .delete('/auth/logout')
    .then(() => {
      const cookies = [
        cookie.serialize('access_token', '', {
          httpOnly: true,
          secure: true,
          expires: new Date(0),
          sameSite: 'strict',
          path: '/',
        }),

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
      if (error.response) res.status(error.response.status).json(error.response.data.error);
      return res.status(500).json('Internal server error');
    });
};

export default handleToken(logout);
