import { NextApiRequest, NextApiResponse } from 'next';
import { externalApi } from '../../../config/api-config';

//Set the tokens as headers before sendind the request to the external API
export const handleToken = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { access_token, refresh_token } = req.cookies;

    if (!access_token && !refresh_token) return res.status(401).json('Missing token');

    externalApi.defaults.headers.Authorization = access_token;
    externalApi.defaults.headers.cookie = refresh_token;

    return handler(req, res);
  };
};
