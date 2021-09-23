import { ErrorField, Container } from './style';

interface IErrorBoxRequest {
  error: string;
}

export const ErrorBox = ({ error }: IErrorBoxRequest) => {
  return (
    <Container>
      <ErrorField>
        <span>{error}</span>
      </ErrorField>
    </Container>
  );
};
