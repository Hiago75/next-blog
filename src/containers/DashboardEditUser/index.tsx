import { useState, useContext, FormEvent } from 'react';
import { AiFillCamera } from 'react-icons/ai';

import {
  Container,
  UserPreview,
  UserRole,
  UserData,
  UserDataContainer,
  UserImageBox,
  PreviewName,
  PhotoInput,
  FormWrapper,
} from './style';

import createFormErrorHandler from '../../utils/createFormErrorHandler';
import { createUserPhoto, refreshUserToken, updateUserData, updateUserPhoto } from '../../services';
import { UserImage, ImageUpload, InputLabel, RequestButton } from '../../components';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import isEmail from 'validator/lib/isEmail';
import { AuthContext } from '../../contexts/AuthContext';
import { RequestContext } from '../../contexts/RequestContext';

// Edit User component
export const DashboardEditUser = () => {
  const { setLoading, createNewFormRequest } = useContext(RequestContext);
  const { user, refreshUserData } = useContext(AuthContext);

  const [profilePhoto, setProfilePhoto] = useState<File | undefined>();
  const [temporaryProfilePhoto, setTemporaryPhoto] = useState('');
  const [editingProfilePhoto, setEditingProfilePhoto] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const userRole = user?.admin ? 'Desenvolvedor(a)' : 'Autor(a)';
  const { resetInputErrors, createInputError } = createFormErrorHandler();

  // Handle the name field changes
  function handleNameChange(event: IOnChangeInput) {
    setName(event.target.value);
    resetInputErrors();
  }

  //Handle the email field changes
  function handleEmailChange(event: IOnChangeInput) {
    setEmail(event.target.value);
    resetInputErrors();
  }

  // Open the preview profile photo element and set the temporary photo
  function handlePhotoInputChange(event: IOnChangeInput) {
    const photo = event.target.files[0];

    setEditingProfilePhoto(true);
    setProfilePhoto(photo);
    setTemporaryPhoto(URL.createObjectURL(photo));
  }

  // Clear the profile photo values;
  function handlePhotoInputClick(event) {
    event.target.value = null;
  }

  // Handle the upload/update of the profile photo
  async function handleProfilePhoto() {
    setLoading(true);
    await refreshUserToken();
    if (user?.profilePhoto) {
      await updateUserPhoto({ photo: profilePhoto });
    } else {
      await createUserPhoto({ photo: profilePhoto });
    }
    setLoading(false);

    await refreshUserData(true);
  }

  //Validate the fields to see if everything is in order
  function validateForm() {
    let isValid = true;

    if (name && name.length < 3) {
      createInputError('name', 'Este nome é curto demais');
      isValid = false;
    }

    const emailIsValid = isEmail(email);

    if (email && !emailIsValid) {
      createInputError('email', 'Insira um e-mail valido');
      isValid = false;
    }

    return isValid;
  }

  // Submit the form
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    createNewFormRequest(async () => {
      await refreshUserToken();

      const { error, message } = await updateUserData({ name, email });
      if (error) return { error: true, message: message };

      await refreshUserData(true);
      return { error: false, message: 'Dados atualizados' };
    }, validateForm);
  }

  return (
    <Container>
      <ImageUpload
        isOpen={editingProfilePhoto}
        setIsOpen={setEditingProfilePhoto}
        headerText="Foto de perfil"
        confirmText="Deseja realmente usar essa foto como foto de perfil ?"
        previewPhoto={temporaryProfilePhoto}
        uploadMethod={handleProfilePhoto}
      ></ImageUpload>

      <FormWrapper>
        <UserPreview>
          <UserImageBox>
            <UserImage user={user} imageSize={200}>
              <AiFillCamera size={32} />
              <p>Alterar foto de perfil</p>
              <PhotoInput
                onChange={handlePhotoInputChange}
                onClick={handlePhotoInputClick}
                type="file"
                id="photo"
                accept="image/png, image/jpeg, image/jpg"
              />
            </UserImage>
          </UserImageBox>
          <UserData>
            <span />
            <PreviewName>{name || user?.name}</PreviewName>
            <UserRole>{userRole}</UserRole>
          </UserData>
        </UserPreview>

        <>
          <UserDataContainer onSubmit={handleSubmit}>
            <InputLabel htmlFor="name-input" id="name">
              Nome
              <input
                onChange={handleNameChange}
                placeholder={user?.name}
                value={name}
                type="text"
                name="name-input"
              />
            </InputLabel>
            <InputLabel htmlFor="email-input" id="email">
              E-mail
              <input
                onChange={handleEmailChange}
                placeholder={user?.email}
                value={email}
                type="email"
                name="email-input"
              ></input>
            </InputLabel>
            <InputLabel notEditable htmlFor="password-input" id="password">
              Senha
              <input
                value="loremipsumdolorsit"
                readOnly
                className="userPassword"
                type="password"
              ></input>
            </InputLabel>

            <RequestButton type="submit">Atualizar</RequestButton>
          </UserDataContainer>
        </>
      </FormWrapper>
    </Container>
  );
};
