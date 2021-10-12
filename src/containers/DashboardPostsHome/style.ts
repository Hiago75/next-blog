import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const PostsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const PostContainer = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: calc(50% - 20px);
  cursor: pointer;
  padding: 10px 0;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  width: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mainBackground};
  }

  @media (max-width: 900px) {
    width: 100%;
    margin: 15px 0;
    text-align: center;
  }
`;

export const PostText = styled.div`
  width: 40%;
  @media (max-width: 900px) {
    width: 100%;
  }
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
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20%;

  svg {
    margin: 0 5px;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    padding-top: 10px;
  }
`;
