import styled from 'styled-components';

export const Container = styled.div`
  color: ${({ theme }) => theme.fonts.primaryFont};
`;

export const PostContainer = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const PostText = styled.div`
  width: 75%;
`;

export const PostCategory = styled.p``;

export const PostTitle = styled.h2`
  font-size: 17px;
  font-weight: normal;
`;

export const PostActions = styled.div`
  width: 25%;
  svg {
    margin: 0 5px;
    cursor: pointer;
  }
`;
