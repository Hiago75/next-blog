import { countAllPosts } from './posts/count-all-posts';
import { getAllPosts } from './posts/get-all-posts';
import { getPost } from './posts/get-post';
import { loginRequest } from './auth/loginRequest';
import { getExternalAPIClient } from './getExternalAPIClient';
import { getInternalAPIClient } from './getInternalAPIClient';
import { fetchUserData } from './auth/fetchUserData';
import { updateUserData } from './user/updateUserData';
import { updateUserPhoto } from './user/updateUserPhoto';
import { createUserPhoto } from './user/createUserPhoto';

export {
  countAllPosts,
  getAllPosts,
  getPost,
  loginRequest,
  getExternalAPIClient,
  getInternalAPIClient,
  fetchUserData,
  updateUserData,
  updateUserPhoto,
  createUserPhoto,
};
