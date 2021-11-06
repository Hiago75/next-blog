import styled from 'styled-components';

export const PhotoContainer = styled.div`
  width: 100%;
  position: relative;

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;

export const Photo = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 20px;
`;

export const PhotoOverlay = styled.div`
  justify-content: center;
  align-items: flex-end;
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  border-radius: 20px;

  ${PhotoContainer}:hover & {
    display: flex;
  }
`;

export const PhotoAuthor = styled.p`
  color: ${({ theme }) => theme.fonts.primaryFont};
  margin: 10px 0;
`;
