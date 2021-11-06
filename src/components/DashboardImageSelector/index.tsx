import { useContext, Dispatch, SetStateAction, useState } from 'react';
import { AiFillCamera, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { ThemeContext } from 'styled-components';

import { DashboardGallery, PanelButton } from '..';
import { UNSPLASH_API } from '../../config';
import { IGalleryPhoto } from '../../interfaces/IGalleryPhoto';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import {
  PreviewBox,
  Header,
  HeaderSection,
  HeaderItem,
  Image,
  Preview,
  MediaInput,
  Footer,
  MediaLabel,
  MediaOverlay,
  ContentContainer,
  AddPhoto,
} from './style';

interface ImageUploadRequest {
  cover?: boolean;
  isOpen: boolean;
  setPhoto: Dispatch<SetStateAction<File>>;
  setPhotoUrl: Dispatch<SetStateAction<string>>;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setPreviewPhoto?: Dispatch<SetStateAction<string>>;
  photoHandler?: () => Promise<void> | void;
}

//TODO: refactor
export const ImageUpload = ({
  setIsOpen,
  isOpen,
  setPhoto,
  setPhotoUrl,
  setPreviewPhoto,
}: ImageUploadRequest) => {
  const theme = useContext(ThemeContext);

  const [onGallery, setOnGallery] = useState(false);
  const [galleryPhotos, setGalleryPhotos] = useState<IGalleryPhoto[]>();
  const [photoBlob, setPhotoBlob] = useState<string>();
  const [searchQuery, setSearchQuery] = useState<string>();
  const [temporaryPhoto, setTemporaryPhoto] = useState<File>();

  //Handle the click on "X" button
  function handleClosePreviewClick() {
    setIsOpen(false);
  }

  //Define the photo url
  function setPhotoUrlHandler(chosenPhotoUrl: string) {
    setPhoto(undefined);
    setPhotoUrl(chosenPhotoUrl);

    setIsOpen(false);
  }

  //Define the photo file
  function setPhotoHandler() {
    setPhotoUrl(undefined);
    setPhoto(temporaryPhoto);
    setPreviewPhoto(URL.createObjectURL(temporaryPhoto));

    setIsOpen(false);
  }

  //Close the gallery
  function handleNewPhotoClick() {
    setOnGallery(false);
  }

  //Open the gallery and get the unsplash Photos
  async function handleGalleryClick() {
    setOnGallery(true);
    await getUnsplashInitialPhotos();
  }

  //Get the photos from unsplash to use on gallery
  async function getUnsplashInitialPhotos() {
    if (galleryPhotos) return;

    const photos = await UNSPLASH_API.search.getPhotos({
      query: 'random',
      orientation: 'landscape',
    });
    setGalleryPhotos(photos.response.results);
  }

  async function getUnsplashNewPhotos(searchQuery: string, page?: number) {
    const photos = await UNSPLASH_API.search.getPhotos({
      query: searchQuery || 'random',
      orientation: 'landscape',
      page: page || 1,
    });
    setGalleryPhotos((prevPhotos) => [...prevPhotos, ...photos.response.results]);
  }

  //Set the photo
  function handleCoverInputChange(event: IOnChangeInput) {
    const sentPhoto = event.target.files[0];

    setTemporaryPhoto(sentPhoto);
    setPhotoBlob(URL.createObjectURL(sentPhoto));
  }

  //Create the classlist
  function handleClassNames() {
    let classes = '';

    if (isOpen) classes += 'open';
    if (onGallery) classes += ' gallery';

    return classes;
  }

  return (
    <PreviewBox className={handleClassNames()}>
      <Header>
        <HeaderSection>
          <HeaderItem onClick={handleNewPhotoClick}>Nova foto</HeaderItem>
          <HeaderItem onClick={handleGalleryClick}>Galeria</HeaderItem>
        </HeaderSection>
        <AiOutlineClose
          onClick={handleClosePreviewClick}
          size={32}
          color={theme.fonts.primaryFont}
        />
      </Header>

      {onGallery && (
        <DashboardGallery
          searchNewPhotos={getUnsplashNewPhotos}
          setPhotoUrl={setPhotoUrlHandler}
          photos={galleryPhotos}
        ></DashboardGallery>
      )}

      {!onGallery && (
        <>
          <ContentContainer>
            <MediaLabel>
              {!photoBlob && (
                <AddPhoto>
                  <AiOutlinePlus size={78} />
                  <p>Adicionar uma nova foto</p>
                </AddPhoto>
              )}

              <MediaInput
                onChange={handleCoverInputChange}
                type="file"
                accept="image/png, image/gif, image/jpeg"
              ></MediaInput>

              {photoBlob && (
                <Preview>
                  <MediaOverlay>
                    <AiFillCamera size={44} />
                    Alterar foto de capa
                  </MediaOverlay>
                  <Image className="cover" src={photoBlob}></Image>
                </Preview>
              )}
            </MediaLabel>
          </ContentContainer>

          <Footer>
            <PanelButton onClick={setPhotoHandler}>Confirmar</PanelButton>
          </Footer>
        </>
      )}
    </PreviewBox>
  );
};
