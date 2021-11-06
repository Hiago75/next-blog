import styled from 'styled-components';

export const Container = styled.section`
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Photo = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;

const PhotoAuthorText = styled.p`
  width: 100%;
  svg {
    position: relative;
    top: 6px;
    margin-right: 15px;
  }
`;

export const PhotoAuthor = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const PhotoAuthorName = styled(PhotoAuthorText)`
  font-size: 17px;
  padding-bottom: 10px;
`;

export const PhotoAuthorInstagram = styled(PhotoAuthorText)``;

export const PhotoAuthorPortfolio = styled(PhotoAuthorText)`
  a {
    color: ${({ theme }) => theme.fonts.primaryFont};
  }
`;
