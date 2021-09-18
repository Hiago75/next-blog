import { PostCount } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardHomeRequest extends IContainerRequest {
  numberOfPosts: PostCount;
}
