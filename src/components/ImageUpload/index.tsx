import { useContext, Dispatch, SetStateAction } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeContext } from 'styled-components';

import { PanelButton } from '..';
import { PreviewBox, Header, PreviewImage, Footer } from './style';

interface ImageUploadRequest {
  cover?: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  headerText: string;
  confirmText: string;
  previewPhoto: string;
  uploadMethod?: () => Promise<void> | void;
}

//TODO: refactor

export const ImageUpload = ({
  cover,
  isOpen,
  setIsOpen,
  headerText,
  confirmText,
  previewPhoto,
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
    <PreviewBox className={isOpen ? 'open' : ''}>
      <Header>
        <p>{headerText}</p>
        <AiOutlineClose
          onClick={handleClosePreviewClick}
          size={32}
          color={theme.fonts.primaryFont}
        />
      </Header>

      <PreviewImage className={cover ? 'cover' : ''} src={previewPhoto}></PreviewImage>

      <Footer>
        <p>{confirmText}</p>
        <PanelButton onClick={handlePhotoSubmit}>Confirmar</PanelButton>
      </Footer>
    </PreviewBox>
  );
};
