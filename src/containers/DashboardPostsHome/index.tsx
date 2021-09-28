import { useContext, useState } from 'react';
import { IconContext } from 'react-icons';
import { ThemeContext } from 'styled-components';
import { HiTrash, HiPencil } from 'react-icons/hi';

import { Container, PostContainer, PostTitle, PostActions, PostText, PostCategory } from './style';
import { PanelBox, Warning } from '../../components';
import { PostData } from '../../domain/posts/post';
import { RequestContext } from '../../contexts/RequestContext';
import { deletePost } from '../../services/posts/deletePost';
import { refreshUserToken } from '../../services';

interface IDashboardPostsHomeRequest {
  posts: PostData[];
}

export const DashboardPostsHome = ({ posts }: IDashboardPostsHomeRequest) => {
  const theme = useContext(ThemeContext);
  const { setLoading, responseStatusFactory, refreshServerSideProps } = useContext(RequestContext);

  const [postToBeDeleted, setPostToBeDeleted] = useState('');
  const [warning, setWarning] = useState(false);

  //Open the warning and store the id
  function handleDeleteClick(postId: string) {
    setPostToBeDeleted(postId);
    setWarning(true);
  }

  async function warningConfirmClick() {
    setWarning(false);

    setLoading(true);
    await refreshUserToken();
    const { error, message } = await deletePost(postToBeDeleted);
    setLoading(false);

    //Fail
    if (error) return responseStatusFactory(false, 'Opa, algo deu errado', message);

    refreshServerSideProps();

    responseStatusFactory(true, 'Post apagado', 'Ele agora se foi...');
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
        <IconContext.Provider value={{ size: '20' }}>
          {posts.map((post) => (
            <PostContainer key={post.id}>
              <PostText>
                <PostTitle>{post.title}</PostTitle>
                <PostCategory>{post.category.name}</PostCategory>
              </PostText>
              <PostActions>
                <HiPencil />
                <HiTrash
                  onClick={() => handleDeleteClick(post.id)}
                  color={theme.colors.errorColor}
                />
              </PostActions>
            </PostContainer>
          ))}
        </IconContext.Provider>
      </PanelBox>
    </Container>
  );
};
