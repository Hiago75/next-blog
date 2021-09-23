import { PostCategory } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardPostsPageRequest extends IContainerRequest {
  categories: PostCategory;
}
