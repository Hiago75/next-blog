import { useContext, useState } from 'react';
import { IconContext } from 'react-icons';
import { ThemeContext } from 'styled-components';
import { HiTrash, HiPencil } from 'react-icons/hi';

import {
  Container,
  PostContainer,
  PostTitle,
  PostActions,
  PostText,
  PostCategory,
  PostImage,
  PostPreview,
  PostsBox,
} from './style';
import { PanelBox, Warning } from '../../components';
import { PostData } from '../../domain/posts/post';
import { RequestContext } from '../../contexts/RequestContext';
import { deletePost } from '../../services/posts/deletePost';
import { refreshUserToken } from '../../services';
import { useRouter } from 'next/router';

interface IDashboardPostsHomeRequest {
  posts: PostData[];
}

export const DashboardPostsHome = ({ posts }: IDashboardPostsHomeRequest) => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const { setLoading, responseStatusFactory, refreshServerSideProps } = useContext(RequestContext);

  const [postToBeDeleted, setPostToBeDeleted] = useState('');
  const [warning, setWarning] = useState(false);

  //Open the warning and store the id
  function handleDeleteClick(postId: string) {
    setPostToBeDeleted(postId);
    setWarning(true);
  }

  //Redirect to editors page
  function handleEditClick(postSlug: string) {
    router.push(`posts/edit/${postSlug}`);
  }

  async function warningConfirmClick() {
    setWarning(false);

    setLoading(true);
    await refreshUserToken();
    const { error, message } = await deletePost(postToBeDeleted);
    setLoading(false);

    //Fail
    if (error) return responseStatusFactory(false, message);

    refreshServerSideProps();

    responseStatusFactory(true, 'Post apagado');
    setPostToBeDeleted('');
  }

  function warningCancelClick() {
    setWarning(false);
    setPostToBeDeleted('');
  }

  return (
    <Container>
      {warning && (
        <Warning
          title="Tem certeza disso ?"
          message="Assim que esta categoria for excluida, todos os posts nela também serão"
          confirmCallback={warningConfirmClick}
          cancelCallback={warningCancelClick}
        />
      )}
      <PanelBox panelTitle="Posts recentes">
        <PostsBox>
          {posts?.map((post) => (
            <PostContainer key={post.id}>
              <IconContext.Provider value={{ size: '25' }}>
                <PostPreview>
                  <PostImage
                    height={64}
                    width={70}
                    src={post.externalPhotoUrl || post.cover.format.thumbnail.url}
                  ></PostImage>
                </PostPreview>

                <PostText>
                  <PostTitle>{post.title}</PostTitle>
                  <PostCategory>{post.category.name}</PostCategory>
                </PostText>
                <PostActions>
                  <HiPencil onClick={() => handleEditClick(post.slug)} />
                  <HiTrash
                    onClick={() => handleDeleteClick(post.id)}
                    color={theme.colors.errorColor}
                  />
                </PostActions>
              </IconContext.Provider>
            </PostContainer>
          ))}
        </PostsBox>
      </PanelBox>
    </Container>
  );
};
