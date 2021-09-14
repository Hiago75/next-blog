import { useContext } from 'react';
import { IUser } from '../../interfaces/IUser';
import { FaUserAlt } from 'react-icons/fa';
import { Container } from './style';
import { ThemeContext } from 'styled-components';

interface IUserImageProps {
  user: IUser;
  imageSize?: string;
  iconSize?: number;
}

export const UserImage = ({ user, imageSize, iconSize }: IUserImageProps) => {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      {/* If the user has image then display the image, otherwise displays the default "image" */}
      {user?.profilePhotoUrl ? (
        <img width={imageSize} src={user.profilePhotoUrl}></img>
      ) : (
        <FaUserAlt color={theme.fonts.primaryFont} size={iconSize} />
      )}
    </Container>
  );
};
