import { PostData } from '../domain/posts/post';
import { IContainerRequest } from './IContainerRequest';

export interface IDashboardPostHomePage extends IContainerRequest {
  posts: PostData[];
}
