export const API_URL = 'http://127.0.0.1:3500';
export const POSTS_URL = `${API_URL}/posts`;

import { getExternalAPIClient } from '../services/getExternalAPIClient';
import { getInternalAPIClient } from '../services/getInternalAPIClient';

export const externalApi = getExternalAPIClient();
export const internalApi = getInternalAPIClient();
