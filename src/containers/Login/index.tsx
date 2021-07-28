import Image from 'next/image';

import React, { useEffect, useState } from 'react';
import isEmail from 'validator/lib/isEmail';
import { FiMail, FiLock } from 'react-icons/fi';
import { IconContext } from 'react-icons/lib';

import { Container, LoginForm, LoginBox, IconInput } from './style';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  //Set password value
  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  //Set email value
  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  //Check if form is valid
  const formIsValid = () => {
    let isValid = true;
    //TODO: Add a method to show users the errors

    // Check if email and password has been filled
    if (!email || !password) {
      console.log('Os dois campos precisam ser preenchidos');
      return (isValid = false);
    }

    //Use validator to check if the email is valid
    const emailIsValid = isEmail(email);

    if (!emailIsValid) {
      console.log('Email inválido');
      return (isValid = false);
    }

    //If nothing goes wrong returns true
    return isValid;
  };

  //Handle what happens when someone click on form button
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const isValid = formIsValid();

    //TODO: Add login system
    if (isValid) console.log('Passou');
  }

  useEffect(() => {
    // Check if both, password and email attend the minimum size
    const emailIsFilled = email.length >= 5;
    const passwordIsFilled = password.length >= 5;

    // Assign himself a boolean value based on if password and email attend the minimum size
    const formFilled = emailIsFilled && passwordIsFilled ? true : false;

    setIsFilled(formFilled);
  }, [email, password, isFilled]);

  return (
    <Container>
      <LoginBox>
        <Image src="/logo.svg" alt="Colster" width={180} height={80} />

        <LoginForm>
          <IconContext.Provider value={{ color: '#4877d3', size: '18' }}>
            <IconInput htmlFor="email">
              <input onChange={handleEmailChange} name="email" type="text" placeholder="E-mail" />
              <FiMail />
            </IconInput>
            <IconInput htmlFor="password">
              <input
                onChange={handlePasswordChange}
                name="password"
                type="password"
                placeholder="Senha"
              />
              <FiLock />
            </IconInput>
            <button onClick={handleSubmit} className={isFilled ? 'form-filled' : ''}>
              Entrar
            </button>
          </IconContext.Provider>
        </LoginForm>
      </LoginBox>
    </Container>
  );
};
