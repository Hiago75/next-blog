import { useContext, Dispatch, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from 'styled-components';

import { PanelButton } from '..';
import { Container, PreviewBox, Header, PreviewImage, Footer } from './style';

interface ImageUploadRequest {
  cover?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  headerText: string;
  confirmText: string;
  temporaryPhoto: string;
  uploadMethod?: () => Promise<void>;
}

export const ImageUpload = ({
  cover,
  isOpen,
  setIsOpen,
  headerText,
  confirmText,
  temporaryPhoto,
  uploadMethod,
}: ImageUploadRequest) => {
  const theme = useContext(ThemeContext);

  //Handle the click on "X" button
  function handleClosePreviewClick() {
    setIsOpen(false);
  }

  //Handle the submit of the photo
  async function handlePhotoSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (uploadMethod) await uploadMethod();
    setIsOpen(false);
  }

  return (
    <Container className={isOpen ? 'open' : ''}>
      <PreviewBox>
        <Header>
          <p>{headerText}</p>
          <AiOutlineClose
            onClick={handleClosePreviewClick}
            size={32}
            color={theme.fonts.primaryFont}
          />
        </Header>

        <PreviewImage className={cover ? 'cover' : ''} src={temporaryPhoto}></PreviewImage>

        <Footer>
          <p>{confirmText}</p>
          <PanelButton onClick={handlePhotoSubmit}>Confirmar</PanelButton>
        </Footer>
      </PreviewBox>
    </Container>
  );
};
