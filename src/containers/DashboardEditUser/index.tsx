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
  EditPassword,
  FormWrapper,
} from './style';

import { createUserPhoto, refreshUserToken, updateUserData, updateUserPhoto } from '../../services';
import {
  UserImage,
  PanelButton,
  PanelPasswordInput,
  ImageUpload,
  InputLabel,
  ErrorBox,
} from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { showInputError } from '../../utils/showInputErrors';
import { resetInputErrors } from '../../utils/resetInputErrors';
import isEmail from 'validator/lib/isEmail';

// Edit User component
export const DashboardEditUser = () => {
  const { user, refreshUserData } = useContext(AuthContext);

  const [profilePhoto, setProfilePhoto] = useState<File | undefined>();
  const [temporaryProfilePhoto, setTemporaryPhoto] = useState('');
  const [editingProfilePhoto, setEditingProfilePhoto] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //TODO: add change password system
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editingPassword, setEditingPassword] = useState(false);

  const [error, setError] = useState('');

  const userRole = user?.admin ? 'Desenvolvedor(a)' : 'Autor(a)';

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

  // Handle the password field changes
  function handleNewPasswordChange(event: IOnChangeInput) {
    setNewPassword(event.target.value);
    console.log(newPassword);
  }

  // Handle the confirm password field changes
  function handleConfirmPasswordChange(event: IOnChangeInput) {
    setConfirmPassword(event.target.value);
    console.log(confirmPassword);
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
    if (user?.profilePhoto) {
      await updateUserPhoto({ photo: profilePhoto });
    } else {
      await createUserPhoto({ photo: profilePhoto });
    }

    await refreshUserData(true);
  }

  // Toggle the form from the normal data to password
  function togglePasswordEditor(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setEditingPassword(!editingPassword);
  }

  function validateForm() {
    let isValid = true;

    if (name && name.length < 3) {
      showInputError('name', 'Este nome é curto demais');
      isValid = false;
    }

    const emailIsValid = isEmail(email);

    if (email && !emailIsValid) {
      showInputError('email', 'Insira um e-mail valido');
      isValid = false;
    }

    return isValid;
  }

  // Submit the form
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const isValid = validateForm();
    if (!isValid) return;

    await refreshUserToken();
    const { error, message } = await updateUserData({ name, email });

    if (error) setError(message);

    //Update the stored user data
    await refreshUserData(true);
  }

  return (
    <Container>
      <ImageUpload
        isOpen={editingProfilePhoto}
        setIsOpen={setEditingProfilePhoto}
        headerText="Foto de perfil"
        confirmText="Deseja realmente usar essa foto como foto de perfil ?"
        temporaryPhoto={temporaryProfilePhoto}
        uploadMethod={handleProfilePhoto}
      ></ImageUpload>

      <FormWrapper>
        {error && <ErrorBox error={error} />}
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
            <PreviewName>{user?.name}</PreviewName>
            <UserRole>{userRole}</UserRole>
          </UserData>
        </UserPreview>

        {!editingPassword && (
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

              <EditPassword type="button" onClick={togglePasswordEditor}>
                Quero alterar minha senha
              </EditPassword>

              <PanelButton type="submit">Atualizar</PanelButton>
            </UserDataContainer>
          </>
        )}

        {editingPassword && (
          <UserDataContainer>
            <InputLabel notEditable htmlFor="password-input" id="password">
              Senha
              <input
                value="loremipsumdolorsit"
                readOnly
                className="userPassword"
                type="password"
              ></input>
            </InputLabel>
            <PanelPasswordInput
              inputName="Nova senha"
              onInputChange={handleNewPasswordChange}
            ></PanelPasswordInput>
            <PanelPasswordInput
              inputName="Confirmar senha"
              onInputChange={handleConfirmPasswordChange}
            ></PanelPasswordInput>

            <EditPassword type="button" onClick={togglePasswordEditor}>
              Quero alterar outros dados
            </EditPassword>

            <PanelButton type="submit" onClick={handleSubmit}>
              Atualizar
            </PanelButton>
          </UserDataContainer>
        )}
      </FormWrapper>
    </Container>
  );
};
