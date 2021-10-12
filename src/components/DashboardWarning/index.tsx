import { useEffect, useState } from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { FaTimes, FaCheck } from 'react-icons/fa';

import { Container, Button, Title, Message, ButtonBox } from './style';

interface IWarningRequest {
  title: string;
  message: string;
  confirmCallback: () => void;
  cancelCallback: () => void;
}

export const Warning = ({ title, message, confirmCallback, cancelCallback }: IWarningRequest) => {
  const [classList, setClassList] = useState('');

  function handleConfirmClick() {
    confirmCallback();
  }

  function handleCancelClick() {
    setClassList('');
    cancelCallback();
  }

  useEffect(() => {
    setClassList('active');

    return () => setClassList('');
  }, []);

  return (
    <Container className={classList}>
      <HiOutlineExclamationCircle size={128} color="#db9927" />
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonBox>
        <Button className="positive" onClick={handleConfirmClick}>
          <FaCheck /> Confirmar
        </Button>
        <Button className="negative" onClick={handleCancelClick}>
          <FaTimes /> Cancelar
        </Button>
      </ButtonBox>
    </Container>
  );
};
