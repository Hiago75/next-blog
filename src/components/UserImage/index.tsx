import { IUser } from '../../interfaces/IUser';
import { FaUserAlt } from 'react-icons/fa';
import { Container } from './style';

interface IUserImageProps {
  user: IUser;
  imageSize?: string;
  iconSize?: number;
}

export const UserImage = ({ user, imageSize, iconSize }: IUserImageProps) => {
  return (
    <Container>
      {user?.profilePhotoUrl ? (
        <img width={imageSize} src={user.profilePhotoUrl}></img>
      ) : (
        <FaUserAlt color="#0a0c21" size={iconSize} />
      )}
    </Container>
  );
};
