import { ErrorField, Container } from './style';

interface IErrorBoxRequest {
  className?: string;
  error: string;
}

export const ErrorBox = ({ className, error }: IErrorBoxRequest) => {
  return (
    <Container className={className}>
      <ErrorField>
        <span>{error}</span>
      </ErrorField>
    </Container>
  );
};
