import { useState, useContext } from 'react';

import isEmail from 'validator/lib/isEmail';

import createFormErrorHandler from '../../utils/createFormErrorHandler';

import { PanelButton, InputLabel } from '../../components';
import { IOnChangeInput } from '../../interfaces/IOnChangeInput';
import { Container, RegisterForm, RegisterInput, InputDiv } from './style';
import { refreshUserToken } from '../../services';
import { RequestContext } from '../../contexts/RequestContext';
import { createUser } from '../../services/user/createUser';

export const DashboardRegisterProfile = () => {
  const { setLoading, responseStatusFactory } = useContext(RequestContext);

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

  function handleSubmitReponse(success: boolean, title: string, message: string) {
    setLoading(false);
    responseStatusFactory(success, title, message);
  }

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    window.scrollTo(0, 0);

    setLoading(true);

    resetInputErrors();

    const isValid = validateForm();
    if (!isValid) return;

    await refreshUserToken();

    const user = await createUser({ name: username, email, password, admin: isAdmin });

    if (user.error) return handleSubmitReponse(false, 'Opa, algo não deu certo', user.message);

    handleSubmitReponse(true, 'Novo usuário registrado com sucesso', 'De as boas vindas a ele(a)');
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

        <PanelButton type="submit">Criar usuário</PanelButton>
      </RegisterForm>
    </Container>
  );
};
