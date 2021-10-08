import styled from 'styled-components';

export const CategoryPostsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const PostCard = styled.div<{ image: string }>`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  height: 200px;
  min-width: 180px;
  position: relative;
  border-radius: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
  flex: 1 1 calc(33.3% - 10px);

  transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 10px);
  }
`;

export const PostCardOverlay = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const PostCardData = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 10px 8px;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
`;

export const PostCardTitle = styled.h1`
  color: #f9fbff;
  font-size: 22px;
  padding-bottom: 10px;
`;

export const PostCardCategory = styled.span`
  color: #f9fbff;
  text-transform: uppercase;
  font-size: 13px;
`;

export const PostCardAuthor = styled.p`
  color: #f9fbff;
  font-size: 15px;
`;
