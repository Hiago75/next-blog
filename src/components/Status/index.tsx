import { FaCheck, FaTimes } from 'react-icons/fa';
import { Container, SuccessAdvice } from './style';

interface IStatusRequest {
  success?: boolean;
  message: string;
}

export const Status = ({ success, message }: IStatusRequest) => {
  return (
    <Container>
      <SuccessAdvice>
        {success && <FaCheck color="#22b479" size={128} />}
        {!success && <FaTimes color="#aa2020" size={128} />}
        <h1>{message}</h1>
      </SuccessAdvice>
    </Container>
  );
};
