import { useState } from 'react';

import { IUser } from '../../interfaces/IUser';
import {
  Container,
  UserPreview,
  UserRole,
  PreviewData,
  UserDataContainer,
  PreviewName,
  UserDataLabel,
  UserDataInput,
  LabelTitle,
  EditPassword,
  FormWrapper,
} from './style';

import { UserImage, PanelButton, PanelPasswordInput } from '../../components';

interface IEditUserRequest {
  user: IUser;
}

export const EditUser = ({ user }: IEditUserRequest) => {
  const [editingPassword, setEditingPassword] = useState(false);
  const userRole = user?.admin ? 'Desenvolvedor(a)' : 'Autor(a)';

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    alert('Feito');
  }

  function handleNewPasswordChange() {
    alert('Feito');
  }

  function handleConfirmPasswordChange() {
    alert('Feito');
  }

  function togglePasswordEditor(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setEditingPassword(!editingPassword);
  }

  return (
    <Container>
      <FormWrapper>
        <UserPreview>
          <UserImage user={user} imageSize="200" iconSize={200}></UserImage>
          <PreviewData>
            <span />
            <PreviewName>{user?.name}</PreviewName>
            <UserRole>{userRole}</UserRole>
          </PreviewData>
        </UserPreview>

        {!editingPassword && (
          <>
            <UserDataContainer>
              <UserDataLabel>
                <LabelTitle>Nome</LabelTitle>
                <UserDataInput value={user?.name} type="text"></UserDataInput>
              </UserDataLabel>
              <UserDataLabel>
                <LabelTitle>E-mail</LabelTitle>
                <UserDataInput value={user?.email} type="email"></UserDataInput>
              </UserDataLabel>
              <UserDataLabel>
                <LabelTitle>Senha</LabelTitle>
                <UserDataInput
                  value="loremipsumdolor"
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
                value="loremipsumdolor"
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
