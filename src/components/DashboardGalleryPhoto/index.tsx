import { memo } from 'react';

import { IGalleryPhoto } from '../../interfaces/IGalleryPhoto';
import { PhotoContainer, Photo, PhotoOverlay, PhotoAuthor } from './style';

interface IDashboardGalleryPhoto {
  photo: IGalleryPhoto;
}

const DashboardGalleryPhoto = ({ photo }: IDashboardGalleryPhoto) => {
  return (
    <PhotoContainer>
      <Photo src={photo.urls.small}></Photo>
      <PhotoOverlay>
        <PhotoAuthor>{photo.user.name}</PhotoAuthor>
      </PhotoOverlay>
    </PhotoContainer>
  );
};

export default memo(DashboardGalleryPhoto);
