import { useState, useContext } from 'react';
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
  UserDataLabel,
  UserDataInput,
  LabelTitle,
  EditPassword,
  FormWrapper,
} from './style';

import { createUserPhoto, updateUserData, updateUserPhoto } from '../../services';
import {
  UserImage,
  PanelButton,
  PanelPasswordInput,
  ImageUpload,
  InputLabel,
} from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';

// Edit User component
export const EditUser = () => {
  const { user, refreshUserData } = useContext(AuthContext);

  const [profilePhoto, setProfilePhoto] = useState<File | undefined>();
  const [temporaryProfilePhoto, setTemporaryPhoto] = useState('');
  const [editingProfilePhoto, setEditingProfilePhoto] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //TODO: add password change option
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editingPassword, setEditingPassword] = useState(false);

  const userRole = user?.admin ? 'Desenvolvedor(a)' : 'Autor(a)';

  // Handle the name field changes
  function handleNameChange(event: IOnChangeInput) {
    setName(event.target.value);
  }

  //Handle the email field changes
  function handleEmailChange(event: IOnChangeInput) {
    setEmail(event.target.value);
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

  // Submit the form
  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await updateUserData({ name, email });
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
            <UserDataContainer>
              <InputLabel htmlFor="name" id="name">
                Nome
                <input
                  onChange={handleNameChange}
                  placeholder={user?.name}
                  value={name}
                  type="text"
                  name="name"
                />
              </InputLabel>
              <InputLabel htmlFor="email" id="email">
                E-mail
                <input
                  onChange={handleEmailChange}
                  placeholder={user?.email}
                  value={email}
                  type="email"
                  name="email"
                ></input>
              </InputLabel>
              <UserDataLabel>
                <LabelTitle>Senha</LabelTitle>
                <UserDataInput
                  value="loremipsumdolorsit"
                  readOnly
                  className="userPassword"
                  type="password"
                ></UserDataInput>
              </UserDataLabel>

              <EditPassword type="button" onClick={togglePasswordEditor}>
                Quero alterar minha senha
              </EditPassword>

              <PanelButton type="submit" onClick={handleSubmit}>
                Atualizar
              </PanelButton>
            </UserDataContainer>
          </>
        )}

        {editingPassword && (
          <UserDataContainer>
            <UserDataLabel>
              <LabelTitle>Senha atual</LabelTitle>
              <UserDataInput
                value="loremipsumdolorsit"
                readOnly
                className="userPassword"
                type="password"
              ></UserDataInput>
            </UserDataLabel>
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
