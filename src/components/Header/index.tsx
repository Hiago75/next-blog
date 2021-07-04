import Link from 'next/link';
import { Container } from './styles';
import { APP_NAME } from '../../config/';

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <a>{APP_NAME}</a>
      </Link>
    </Container>
  );
};
