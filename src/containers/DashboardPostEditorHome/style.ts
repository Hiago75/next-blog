import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div``;

export const PostsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 50%;
`;

export const PostContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: calc(50% - 20px);
  cursor: pointer;
  padding: 10px 0;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }

  width: 50%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PostText = styled.div`
  width: 60%;
`;

export const PostCategory = styled.p``;

export const PostTitle = styled.h2`
  font-size: 17px;
  font-weight: normal;
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const PostPreview = styled.div``;

export const PostImage = styled(Image)`
  width: 40%;
  border-radius: 50%;
`;
