import { PostData, PostCategory } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardPostEditor extends IContainerRequest {
  post: PostData;
  categories: PostCategory[];
}
