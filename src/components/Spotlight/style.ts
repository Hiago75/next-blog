import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Post = styled.div`
  margin-bottom: 20px;
  cursor: pointer;

  &.main-post {
    width: 70%;
    padding-right: 50px;
  }

  &.side-post {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;

    &.main-post {
      width: 100%;
      padding-right: 0px;
    }
  }
`;

export const PostImageBox = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
`;

export const PostImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;

  ${Post}:hover & {
    transform: scale(1.1);
  }
`;

export const PostPreviewData = styled.div`
  margin-top: 5px;
`;

export const PostCategory = styled.span`
  color: ${({ theme }) => theme.fonts.smothFont};
  text-transform: uppercase;
  font-size: 15px;
  display: block;
`;

export const PostTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-weight: bold;
  font-size: 24px;
  margin: 7px 0;
  position: relative;
  display: inline-block;

  &:after {
    content: '';
    width: 0;
    height: 3px;
    background-color: ${({ theme }) => theme.fonts.primaryFont};
    position: absolute;
    bottom: 0%;
    left: 0%;
    transition: width 0.3s ease;
  }

  ${Post}:hover & {
    :after {
      width: 100%;
    }
  }
`;

export const PostAuthor = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const SidePosts = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column wrap;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SidePost = styled.div``;
