import { PostCategory } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardNewPostPageRequest extends IContainerRequest {
  categories: PostCategory[];
}
