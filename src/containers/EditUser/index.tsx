import { IUser } from '../../interfaces/IUser';
import {
  Container,
  UserPreview,
  UserData,
  UserRole,
  UserPhoto,
  UserDataForm,
  PreviewData,
  DataField,
  Title,
  Content,
  FilledButton,
  BaseButton,
  UserDataContainer,
  ButtonBox,
  FormDataField,
  EditInput,
  PreviewName,
  PageTitle,
} from './style';
import { FaUserAlt, FaPencilAlt } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface IEditUserRequest {
  user: IUser;
}

export const EditUser = ({ user }: IEditUserRequest) => {
  const { updateUser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const userRole = user?.admin ? 'Desenvolvedor(a)' : 'Autor(a)';

  function handleEditButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsEditing(true);
  }

  function handleEmailField(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handleNameField(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSaveButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsEditing(false);
    updateUser({ email, name });
  }

  function handleCancelButton(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    setIsEditing(false);
  }

  return (
    <Container>
      <PageTitle>{isEditing ? 'Editar perfil' : 'Visualizar perfil'}</PageTitle>
      <UserPreview>
        <UserPhoto>
          {user?.profilePhotoUrl ? (
            <img src={user.profilePhotoUrl}></img>
          ) : (
            <FaUserAlt color="lightcyan" size={230} />
          )}
        </UserPhoto>
        <PreviewData>
          <PreviewName>{user?.name}</PreviewName>
          <UserRole>{userRole}</UserRole>
        </PreviewData>
      </UserPreview>
      <UserDataContainer>
        {isEditing ? (
          <UserDataForm>
            <FormDataField>
              <Title>Nome:</Title>
              <EditInput
                name="username"
                type="text"
                placeholder="Nome"
                defaultValue={user?.name}
                onChange={handleNameField}
              ></EditInput>
            </FormDataField>
            <FormDataField>
              <Title>E-mail:</Title>
              <EditInput
                name="email"
                type="email"
                placeholder="E-mail"
                defaultValue={user?.email}
                onChange={handleEmailField}
              ></EditInput>
            </FormDataField>
            <DataField className="full-size not-editable">
              <Title>Cargo:</Title>
              <Content className="full-size">{userRole}</Content>
            </DataField>
            <ButtonBox>
              <FilledButton onClick={handleSaveButton}>Salvar</FilledButton>
              <BaseButton onClick={handleCancelButton}>Cancelar</BaseButton>
            </ButtonBox>
          </UserDataForm>
        ) : (
          <UserData>
            <DataField>
              <Title>Nome:</Title>
              <Content>{user?.name}</Content>
            </DataField>

            <DataField>
              <Title>E-mail:</Title>
              <Content>{user?.email}</Content>
            </DataField>

            <DataField>
              <Title>Cargo:</Title>
              <Content>{userRole}</Content>
            </DataField>

            <ButtonBox>
              <BaseButton onClick={handleEditButton}>
                <FaPencilAlt /> Editar o perfil
              </BaseButton>
            </ButtonBox>
          </UserData>
        )}
      </UserDataContainer>
    </Container>
  );
};
