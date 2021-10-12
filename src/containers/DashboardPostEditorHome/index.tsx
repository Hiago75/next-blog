import { useRouter } from 'next/router';

import {
  Container,
  PostContainer,
  PostTitle,
  PostsBox,
  PostText,
  PostCategory,
  PostPreview,
  PostImage,
} from './style';
import { PanelBox } from '../../components';

import { PostData } from '../../domain/posts/post';

interface IDashboardPostsHomeRequest {
  posts: PostData[];
}

export const DashboardPostEditorHome = ({ posts }: IDashboardPostsHomeRequest) => {
  const { push } = useRouter();

  function handlePostContainerClick(slug: string) {
    push(`/cboard/posts/edit/${slug}`);
  }

  return (
    <Container>
      <PanelBox panelTitle="Qual post quer editar ?">
        <PostsBox>
          {posts?.map((post) => (
            <PostContainer onClick={() => handlePostContainerClick(post.slug)} key={post.id}>
              <PostPreview>
                <PostImage height={64} width={70} src={post.cover.format.thumbnail.url}></PostImage>
              </PostPreview>

              <PostText>
                <PostTitle>{post.title}</PostTitle>
                <PostCategory>{post.category.name}</PostCategory>
              </PostText>
            </PostContainer>
          ))}
        </PostsBox>
      </PanelBox>
    </Container>
  );
};
