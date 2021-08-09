import { countAllPosts } from './posts/count-all-posts';
import { getAllPosts } from './posts/get-all-posts';
import { getPost } from './posts/get-post';
import { loginRequest } from './auth/loginRequest';
import { getExternalAPIClient } from './getExternalAPIClient';
import { getInternalAPIClient } from './getInternalAPIClient';
import { fetchUserData } from './auth/fetchUserData';
import { updateUserData } from './user/updateUserData';

export {
  countAllPosts,
  getAllPosts,
  getPost,
  loginRequest,
  getExternalAPIClient,
  getInternalAPIClient,
  fetchUserData,
  updateUserData,
};
