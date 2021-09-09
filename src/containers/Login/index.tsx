import Image from 'next/image';
import Router from 'next/router';

import React, { useContext, useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { FiMail } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';
import { PanelPasswordInput } from '../../components';
import { Container, LoginForm, LoginBox, IconInput, ErrorField } from './style';

//TODO: Clean this code
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
    resetFields();
  }

  //Set email value
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    resetFields();
  }

  //Create a "p" element containing the error message and add a error class to the input
  function showError(fieldName: string, message: string) {
    const label = document.getElementById(fieldName);
    const input = label.querySelector('input');
    const p = document.createElement('p');

    p.innerText = message;
    p.classList.add('error-message');

    input.classList.add('form-error');
    label.appendChild(p);
  }

  //Remove all "p" from the labels and remove the error class from the inputs
  function resetFields() {
    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
      const errorMessage = label.querySelector('p');
      const input = label.querySelector('input');

      if (errorMessage) errorMessage.remove();
      input.classList.remove('form-error');
    });
  }

  //Check if form is valid
  const formIsValid = () => {
    let isValid = true;

    //Use validator to check if the email is valid
    const emailIsValid = isEmail(email);

    if (!emailIsValid) {
      showError('email', 'Insira um e-mail válido');
      return (isValid = false);
    }

    //If nothing goes wrong returns true
    return isValid;
  };

  //Handle what happens when someone click on form button
  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    resetFields();

    if (!isFilled) return;

    const isValid = formIsValid();

    //TODO: style errors from API
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
        {errors && (
          <ErrorField>
            <span>{errors}</span>
          </ErrorField>
        )}

        <LoginForm>
          <IconInput htmlFor="email" id="email">
            E-mail
            <input onChange={handleEmailChange} type="text" />
            <FiMail color="#4877d3" size="18" />
          </IconInput>

          <PanelPasswordInput inputName="Senha" onInputChange={handlePasswordChange} />

          <button onClick={handleSubmit} className={isFilled ? 'form-filled' : ''}>
            Entrar
          </button>
        </LoginForm>
      </LoginBox>
    </Container>
  );
};
