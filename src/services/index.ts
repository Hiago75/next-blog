import { countAllPosts } from './posts/countAllPosts';
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
import { refreshUserToken } from './auth/refreshUserToken';
import { createNewCover } from './covers/createNewCover';
import { deleteCategory } from './categories/deleteCategory';
import { deletePost } from './posts/deletePost';
import { uploadImage } from './posts/uploadImage';
import { getAllTags } from './tags/getAllTags';
import { createNewTag } from './tags/createNewTag';
import { deleteTag } from './tags/deleteTag';

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
  refreshUserToken,
  deleteCategory,
  deletePost,
  uploadImage,
  getAllTags,
  createNewTag,
  deleteTag,
};
