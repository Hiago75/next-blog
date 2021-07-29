import axios from 'axios';
import { parseCookies } from 'nookies';

export function getAPIClient(ctx?: unknown) {
  const { 'nextblog.token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3500',
    headers: { 'Content-Type': 'application/json' },
  });

  api.interceptors.request.use((config) => {
    return config;
  });

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`;
  }

  return api;
}
