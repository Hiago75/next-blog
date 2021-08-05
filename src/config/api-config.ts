export const API_URL = 'https://secure-citadel-30652.herokuapp.com';
export const POSTS_URL = `${API_URL}/posts`;

import { getExternalAPIClient } from '../services/getExternalAPIClient';
import { getInternalAPIClient } from '../services/getInternalAPIClient';

export const externalApi = getExternalAPIClient();
export const internalApi = getInternalAPIClient();
