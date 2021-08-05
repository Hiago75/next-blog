import axios from 'axios';

export function getExternalAPIClient() {
  const externalApi = axios.create({
    baseURL: 'http://127.0.0.1:3500',
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  externalApi.interceptors.request.use((config) => {
    return config;
  });

  return externalApi;
}
