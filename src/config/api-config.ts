export const API_URL = process.env.API_URL;
export const POSTS_URL = `${API_URL}/posts`;

import { getExternalAPIClient } from '../services/getExternalAPIClient';

export const externalApi = getExternalAPIClient();
