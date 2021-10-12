import axios from 'axios';

export function getExternalAPIClient() {
  const externalApi = axios.create({
    baseURL: process.env.API_URL,
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
