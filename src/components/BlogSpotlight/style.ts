import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Post = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

//Post Image
export const PostImageBox = styled.div`
  width: 60%;
  overflow: hidden;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const PostImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;

  ${Post}:hover & {
    transform: scale(1.1);
  }
`;

//Post Preview data
export const PostPreviewData = styled.div`
  margin-top: 5px;
  width: 40%;
  padding: 50px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;

export const PostBadge = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastColor};
    padding: 8 10px;
  `}
`;

export const PostCategory = styled.p`
  color: ${({ theme }) => theme.fonts.smothFont};
  text-transform: uppercase;
  font-size: 15px;
  display: block;
  margin: 15px 0;
`;

export const PostTitle = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  font-weight: bold;
  font-size: 23px;
  margin-top: 25px;
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
