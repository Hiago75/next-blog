import { PostCategory, PostCount } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardCategoriesPageRequest extends IContainerRequest {
  numberOfPosts: PostCount;
  categories: PostCategory[];
}
