import { countAllPosts } from './posts/count-all-posts';
import { getAllPosts } from './posts/get-all-posts';
import { getPost } from './posts/get-post';
import { loginRequest } from './auth/loginRequest';
import { getExternalAPIClient } from './getExternalAPIClient';
import { fetchUserData } from './auth/fetchUserData';
import { updateUserData } from './user/updateUserData';
import { updateUserPhoto } from './user/updateUserPhoto';
import { createUserPhoto } from './user/createUserPhoto';
import { verifyAuthentication } from './auth/verifyAuthentication';
import { createNewCategory } from './categories/createNewCategory';
import { getAllCategories } from './categories/getAllCategories';
import { createNewPost } from './posts/createNewPost';
import { createNewCover } from './covers/createNewCover';

export {
  countAllPosts,
  getAllPosts,
  getPost,
  loginRequest,
  getExternalAPIClient,
  fetchUserData,
  updateUserData,
  updateUserPhoto,
  createUserPhoto,
  verifyAuthentication,
  createNewCategory,
  getAllCategories,
  createNewPost,
  createNewCover,
};
