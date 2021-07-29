export const API_URL = 'https://secure-citadel-30652.herokuapp.com';
export const POSTS_URL = `${API_URL}/posts`;

import { getAPIClient } from '../services/auth/getAPIClient';

export const api = getAPIClient();
