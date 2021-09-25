import Image from 'next/image';
import Router from 'next/router';

import React, { useContext, useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';

import { AuthContext } from '../../contexts/AuthContext';
import { PanelPasswordInput, InputLabel, ErrorBox } from '../../components';
import { Container, LoginForm, LoginBox } from './style';
import { showInputError } from '../../utils/showInputErrors';
import { resetInputErrors } from '../../utils/resetInputErrors';

export const Login = () => {
  const { login, errors, isAuthenticated, refreshUserData } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  if (isAuthenticated) {
    refreshUserData(true);
    Router.push('/admin/dashboard');
  }

  //Set password value
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    resetInputErrors();
  }

  //Set email value
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    resetInputErrors();
  }

  //Check if form is valid
  const formIsValid = () => {
    let isValid = true;

    //Use validator to check if the email is valid
    const emailIsValid = isEmail(email);

    if (!emailIsValid) {
      showInputError('email', 'Insira um e-mail válido');
      return (isValid = false);
    }

    //If nothing goes wrong returns true
    return isValid;
  };

  //Handle what happens when someone click on form button
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    resetInputErrors();

    if (!isFilled) return;

    const isValid = formIsValid();

    if (isValid) await login({ email, password });
  }

  useEffect(() => {
    // Check if both, password and email attend the minimum size
    const emailIsFilled = email.length >= 5;
    const passwordIsFilled = password.length >= 5;

    // Assign himself a boolean value based on if password and email attend the minimum size
    const formFilled = emailIsFilled && passwordIsFilled ? true : false;

    setIsFilled(formFilled);
  }, [email, password, setIsFilled]);

  return (
    <Container>
      <LoginBox>
        <Image src="/logo.svg" alt="Colster" width={260} height={120} />
        {errors && <ErrorBox error={errors} />}

        <LoginForm>
          <InputLabel htmlFor="email" id="email">
            E-mail
            <input onChange={handleEmailChange} type="email" name="email" />
          </InputLabel>
          <PanelPasswordInput inputName="Senha" onInputChange={handlePasswordChange} />

          <button onClick={handleSubmit} className={isFilled ? 'form-filled' : ''}>
            Entrar
          </button>
        </LoginForm>
      </LoginBox>
    </Container>
  );
};
