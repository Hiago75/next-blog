import { useState, useContext } from 'react';
import { AiFillCamera, AiOutlineClose } from 'react-icons/ai';

import {
  Container,
  UserPreview,
  UserRole,
  UserData,
  UserDataContainer,
  PreviewProfilePhoto,
  PreviewProfilePhotoBox,
  PreviewProfilePhotoHeader,
  UserImageBox,
  PreviewName,
  PhotoInput,
  UserDataLabel,
  UserDataInput,
  LabelTitle,
  EditPassword,
  ConfirmText,
  FormWrapper,
} from './style';

import { updateUserData, updateUserPhoto, createUserPhoto } from '../../services';
import { UserImage, PanelButton, PanelPasswordInput, Loading } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from 'styled-components';

// Edit User component
export const EditUser = () => {
  const theme = useContext(ThemeContext);
  const { user, refreshUserData } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

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
  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  //Handle the email field changes
  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  // Handle the password field changes
  function handleNewPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(event.target.value);
    console.log(newPassword);
  }

  // Handle the confirm password field changes
  function handleConfirmPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(event.target.value);
    console.log(confirmPassword);
  }

  // Open the preview profile photo element and set the temporary photo
  function handlePhotoInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const photo = event.target.files[0];

    setEditingProfilePhoto(true);
    setProfilePhoto(photo);
    setTemporaryPhoto(URL.createObjectURL(photo));
  }

  // Clear the profile photo values;
  function handlePhotoInputClick(event) {
    event.target.value = null;
  }

  // Toggle the form from the normal data to password
  function togglePasswordEditor(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setEditingPassword(!editingPassword);
  }

  // Close the preview profile photo element
  function handleClosePreviewClick() {
    setEditingProfilePhoto(false);
    setTemporaryPhoto('');
    setProfilePhoto(undefined);
  }

  // Handle the profile photo submit event
  async function handleProfilePhotoSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsLoading(true);

    if (user?.profilePhoto) {
      await updateUserPhoto({ profilePhoto });
    } else {
      await createUserPhoto({ profilePhoto });
    }

    setIsLoading(false);

    //Update the stored user data
    await refreshUserData(true);
  }

  // Submit the form
  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await updateUserData({ name, email });
    //Update the stored user data
    await refreshUserData(true);
  }

  if (isLoading)
    return (
      <Loading>
        <h1>Espera só um segundo enquanto eu atualizo tudo por aqui</h1>
      </Loading>
    );

  return (
    <Container>
      {editingProfilePhoto && (
        <PreviewProfilePhoto>
          <PreviewProfilePhotoBox>
            <PreviewProfilePhotoHeader>
              <p>Sua nova foto de perfil irá ficar assim:</p>
              <AiOutlineClose
                onClick={handleClosePreviewClick}
                size={32}
                color={theme.fonts.primaryFont}
              />
            </PreviewProfilePhotoHeader>

            <img src={temporaryProfilePhoto} alt="Temporary profile photo" />

            <ConfirmText>
              <p>Deseja realmente alterar sua foto ?</p>
              <PanelButton onClick={handleProfilePhotoSubmit} type="submit">
                Confirmar
              </PanelButton>
            </ConfirmText>
          </PreviewProfilePhotoBox>
        </PreviewProfilePhoto>
      )}
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
              <UserDataLabel>
                <LabelTitle>Nome</LabelTitle>
                <UserDataInput
                  onChange={handleNameChange}
                  placeholder={user?.name}
                  value={name}
                  type="text"
                ></UserDataInput>
              </UserDataLabel>
              <UserDataLabel>
                <LabelTitle>E-mail</LabelTitle>
                <UserDataInput
                  onChange={handleEmailChange}
                  placeholder={user?.email}
                  value={email}
                  type="email"
                ></UserDataInput>
              </UserDataLabel>
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
