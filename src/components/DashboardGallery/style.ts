import styled, { css } from 'styled-components';

export const PhotoDetailsHeader = styled.header`
  margin-left: 0 !important;
  height: 20px;
  position: fixed;
  top: 60px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  svg {
    cursor: pointer;
  }
`;

export const Container = styled.section`
  height: 90%;
  overflow-y: auto;
  position: relative;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GalleryHeader = styled.header`
  position: fixed;
  z-index: 15;
  width: 100%;
  top: 10%;
  margin-left: 0 !important;
  background-color: ${({ theme }) => theme.colors.alternativeBackground};
  padding: 0 15px;
  height: 110px;
`;

export const GalleryProvider = styled.h1`
  color: ${({ theme }) => theme.fonts.primaryFont};
  text-align: center;
  padding: 10px 0;

  a {
    color: ${({ theme }) => theme.fonts.primaryFont};
  }
`;

export const GallerySearch = styled.form`
  width: 100%;
  margin: 10px 0;
  position: relative;

  svg {
    position: absolute;
    z-index: 15;
    top: 12px;
    left: 5px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding-left: 38px !important;
  font-size: 16px;

  &::placeholder {
    font-size: 16px;
  }
`;

export const PhotosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 110px;
  gap: 10px;
  padding: 0 20px;
`;

export const LoadMoreButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.contrastColor};
    color: ${theme.fonts.primaryFont};
    border-radius: 20px;
    border: 0;
    padding: 10px 25px;
    margin: 40px 0;
  `}
`;

export const GalleryPhotoWrapper = styled.div`
  flex: 0 0 calc(33.3% - 20px);

  @media (max-width: 900px) {
    flex: 0 0 100%;
    padding-bottom: 20px;
  }
`;
