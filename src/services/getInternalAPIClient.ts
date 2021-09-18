import axios from 'axios';

//TODO: Put API urls on environment variables
export function getInternalAPIClient() {
  const internalApi = axios.create({
    // TODO: insert environment variable to baseURL
    baseURL: 'http://127.0.0.1:3000',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  internalApi.interceptors.request.use((config) => {
    return config;
  });

  return internalApi;
}
