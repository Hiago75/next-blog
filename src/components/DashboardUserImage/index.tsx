import { useContext } from 'react';
import { FaUserAlt } from 'react-icons/fa';

import { IUser } from '../../interfaces/IUser';
import { Container, EditUserImage, EditUserImageText } from './style';
import { ThemeContext } from 'styled-components';

interface IUserImageProps {
  user: IUser;
  imageSize: number;
  children?: React.ReactNode;
}

export const UserImage = ({ user, imageSize, children }: IUserImageProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Container style={{ width: `${imageSize}px`, height: `${imageSize}px` }}>
      <EditUserImage>
        <EditUserImageText>{children}</EditUserImageText>
      </EditUserImage>

      {/* If the user has image then display the image, otherwise displays the default "image" */}
      {user?.profilePhoto?.url ? (
        <img width={imageSize} src={user.profilePhoto.url}></img>
      ) : (
        <FaUserAlt className="icon-image" color={theme.fonts.primaryFont} size={imageSize} />
      )}
    </Container>
  );
};
