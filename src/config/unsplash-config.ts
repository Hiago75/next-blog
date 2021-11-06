import { createApi } from 'unsplash-js';

export const UNSPLASH_API = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});
