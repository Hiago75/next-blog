import { useContext, useState } from 'react';

import isEmail from 'validator/lib/isEmail';

import createFormErrorHandler from '../../utils/createFormErrorHandler';

import { InputLabel, RequestButton } from '../../components';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { Container, RegisterForm, RegisterInput, InputDiv } from './style';
import { refreshUserToken } from '../../services';
import { createUser } from '../../services/user/createUser';
import { RequestContext } from '../../contexts/RequestContext';

export const DashboardRegisterProfile = () => {
  const { createNewFormRequest } = useContext(RequestContext);
  const [username, setUsername] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { createInputError, resetInputErrors, error } = createFormErrorHandler();

  function handleUsernameChange(event: IOnChangeInput) {
    setUsername(event.target.value);
  }

  function handleRoleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setIsAdmin(event.target.checked);
  }

  function handleEmailChange(event: IOnChangeInput) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event: IOnChangeInput) {
    setPassword(event.target.value);
  }

  function validateForm() {
    let isValid = true;

    if (!username) createInputError('name', 'Todos os campos são obrigatórios');
    if (!email) createInputError('email', 'Todos os campos sao obrigatórios');
    if (!password) createInputError('password', 'Todos os campos sao obrigatórios');

    if (username && username.length < 3) createInputError('name', 'Nome muito curto');
    if (password && password.length < 5) createInputError('password', 'Senha muito curta');
    if (email && !isEmail(email)) createInputError('email', 'E-mail inválido');

    if (error) isValid = false;

    return isValid;
  }

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    //Reset the input errors
    resetInputErrors();

    createNewFormRequest(async () => {
      await refreshUserToken();

      const user = await createUser({ name: username, email, password, admin: isAdmin });

      if (user.error) return { error: true, message: user.message };

      return {
        error: false,
        message: 'Usuario registrado com sucesso',
      };
    }, validateForm);
  }

  return (
    <Container>
      <RegisterForm onSubmit={handleFormSubmit}>
        <InputLabel htmlFor="name-input" id="name">
          Nome
          <RegisterInput
            value={username}
            onChange={handleUsernameChange}
            name="name-input"
            type="text"
          />
        </InputLabel>

        <InputLabel htmlFor="email-input" id="email">
          E-mail
          <RegisterInput
            value={email}
            onChange={handleEmailChange}
            type="email"
            name="email-input"
          />
        </InputLabel>

        <InputLabel htmlFor="password-input" id="password">
          Senha
          <RegisterInput
            value={password}
            onChange={handlePasswordChange}
            type="password"
            name="password-input"
          />
        </InputLabel>

        <InputDiv>
          <input onChange={handleRoleChange} type="checkbox" name="checkbox-input" />
          <label htmlFor="checkbox-input" id="checkbox">
            É administrador ?
          </label>
        </InputDiv>

        <RequestButton type="submit">Criar usuário</RequestButton>
      </RegisterForm>
    </Container>
  );
};
