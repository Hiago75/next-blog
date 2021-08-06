import Image from 'next/image';

import React, { useContext, useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

import { AuthContext } from '../../contexts/AuthContext';
import { Container, LoginForm, LoginBox, IconInput, ErrorField } from './style';

export const Login = () => {
  const { login, errors } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

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
  // Toggle password visibility
  function handleVisible() {
    setPasswordVisible(!passwordVisible);
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
        <Image src="/logo.svg" alt="Colster" width={180} height={80} />
        {errors && (
          <ErrorField>
            <span>{errors}</span>
          </ErrorField>
        )}
        <LoginForm>
          <IconInput htmlFor="email" id="email">
            <input onChange={handleEmailChange} type="text" placeholder="E-mail" />
            <FiMail color="#4877d3" size="18" />
          </IconInput>
          <IconInput htmlFor="password" id="password">
            <input
              onChange={handlePasswordChange}
              name="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Senha"
            />
            <FiLock color="#4877d3" size="18" />
            <a onClick={handleVisible} id="toggleVisible">
              {passwordVisible ? (
                <FiEyeOff color="#4877d3" size="20" />
              ) : (
                <FiEye color="#4877d3" size="20" />
              )}
            </a>
          </IconInput>
          <button onClick={handleSubmit} className={isFilled ? 'form-filled' : ''}>
            Entrar
          </button>
        </LoginForm>
      </LoginBox>
    </Container>
  );
};
