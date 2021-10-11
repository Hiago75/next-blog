import { PostCategory, PostCount, PostTags } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardCategoriesPageRequest extends IContainerRequest {
  numberOfPosts: PostCount;
  categories: PostCategory[];
  tags: PostTags[];
}
