import { IconContext } from 'react-icons';
import { CgInstagram, CgWebsite } from 'react-icons/cg';

import { IGalleryPhoto } from '../../interfaces/IGalleryPhoto';
import {
  Container,
  Photo,
  PhotoAuthor,
  PhotoAuthorName,
  PhotoAuthorInstagram,
  PhotoAuthorPortfolio,
} from './style';

interface IGalleryPhotoDetails {
  photo: IGalleryPhoto;
}

export const GalleryPhotoDetails = ({ photo }: IGalleryPhotoDetails) => {
  return (
    <IconContext.Provider value={{ size: '24' }}>
      <Container>
        <Photo src={photo.urls.small}></Photo>
        <PhotoAuthor>
          <PhotoAuthorName>
            Foto por <b>{photo.user.name}</b>
          </PhotoAuthorName>
          <PhotoAuthorInstagram>
            <CgInstagram />
            {photo.user.instagram_username}
          </PhotoAuthorInstagram>
          {photo.user.portfolio_url && (
            <PhotoAuthorPortfolio>
              <CgWebsite />
              <a href={photo.user.portfolio_url} target="_blank" rel="noreferrer">
                {photo.user.portfolio_url}
              </a>
            </PhotoAuthorPortfolio>
          )}
        </PhotoAuthor>
      </Container>
    </IconContext.Provider>
  );
};
