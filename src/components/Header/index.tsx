import Link from 'next/link';

import { MainHeader, Container, Logo } from './styles';
import { APP_NAME } from '../../config/';
import { NavLink } from '../';

export const Header = () => {
  return (
    <MainHeader>
      <Container>
        <Link href="/">
          <Logo>{APP_NAME}</Logo>
        </Link>
        <nav>
          <ul>
            <NavLink href="/" exact>
              Home
            </NavLink>

            <NavLink href="/posts/page/1/javascript" exact>
              JavaScript
            </NavLink>

            <NavLink href="/posts/page/1/typescript" exact>
              TypeScript
            </NavLink>

            <NavLink href="/posts/page/1/python" exact>
              Python
            </NavLink>
          </ul>
        </nav>
      </Container>
    </MainHeader>
  );
};
