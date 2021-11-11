import React, { useContext, useState } from 'react';
import { BiSearchAlt, BiLeftArrowAlt } from 'react-icons/bi';
import { ThemeContext } from 'styled-components';

import { GalleryPhotoDetails, DashboardGalleryPhoto, PanelButton } from '..';
import {
  PhotoDetailsHeader,
  Container,
  GalleryHeader,
  PhotosContainer,
  GalleryProvider,
  GallerySearch,
  SearchInput,
  GalleryPhotoWrapper,
  LoadMoreButton,
} from './style';
import { IGalleryPhoto } from '../../interfaces/IGalleryPhoto';
import { UNSPLASH_API } from '../../config';

interface IDashboardGallery {
  photos: IGalleryPhoto[];
  setPhotoUrl: (chosenPhotoUrl: string) => void;
  searchNewPhotos: (searchQuery: string, page?: number) => Promise<void>;
}

export const DashboardGallery = ({ photos, setPhotoUrl, searchNewPhotos }: IDashboardGallery) => {
  const theme = useContext(ThemeContext);

  const [onPhotoDetails, setOnPhotoDetails] = useState(false);
  const [chosenPhoto, setChosenPhoto] = useState<IGalleryPhoto | undefined>();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [currentPage, setCurrentPage] = useState<number>(1);

  //Set the photo
  function handleGalleryPhotoClick(photo: IGalleryPhoto) {
    setOnPhotoDetails(true);
    setChosenPhoto(photo);
  }

  //Return to the gallery when on photo details
  function handleReturnDetailsArrowClick() {
    setOnPhotoDetails(false);
    setChosenPhoto(undefined);
  }

  //Send a download request to unsplhas server and set the photo url
  async function downloadUnsplashPhoto() {
    const photo = await UNSPLASH_API.photos.trackDownload({
      downloadLocation: chosenPhoto.links.download_location,
    });

    setPhotoUrl(photo.response.url);
  }

  //Set the search query
  function handleSearchInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  //Send a new image request using the search query that has been defined
  async function handleSearchSubmit(event: React.FormEvent) {
    event.preventDefault();

    await searchNewPhotos(searchQuery);
  }

  function loadMorePhotos() {
    setCurrentPage((currentPage) => currentPage + 1);
    searchNewPhotos(searchQuery, currentPage + 1);
  }

  // Return the photo details if necessary
  if (onPhotoDetails)
    return (
      <>
        <PhotoDetailsHeader>
          <BiLeftArrowAlt
            color={theme.fonts.primaryFont}
            size={32}
            onClick={handleReturnDetailsArrowClick}
          />
          <PanelButton onClick={downloadUnsplashPhoto}>Usar esta foto</PanelButton>
        </PhotoDetailsHeader>
        <GalleryPhotoDetails photo={chosenPhoto} />
      </>
    );

  // Returns the gallery itself
  return (
    <Container>
      {photos ? (
        <>
          <GalleryHeader>
            <GalleryProvider>
              Fotos fornecidas por{' '}
              <a href="https://unsplash.com" target="_blank" rel="noreferrer">
                Unsplash
              </a>
            </GalleryProvider>

            <GallerySearch onSubmit={handleSearchSubmit}>
              <BiSearchAlt color={theme.fonts.primaryFont} size={24} />
              <SearchInput
                onChange={handleSearchInputChange}
                placeholder="Procurando algo específico ?"
              ></SearchInput>
            </GallerySearch>
          </GalleryHeader>

          <PhotosContainer>
            {photos.map((photo) => (
              <GalleryPhotoWrapper key={photo.id} onClick={() => handleGalleryPhotoClick(photo)}>
                <DashboardGalleryPhoto photo={photo}></DashboardGalleryPhoto>
              </GalleryPhotoWrapper>
            ))}
          </PhotosContainer>

          <LoadMoreButton onClick={loadMorePhotos}>Carregar mais</LoadMoreButton>
        </>
      ) : (
        <h1>Carregando</h1>
      )}
    </Container>
  );
};
