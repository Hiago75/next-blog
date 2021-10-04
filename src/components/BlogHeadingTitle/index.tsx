import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';

import { Container, Title, LinkButton, LineDivider } from './style';

interface IBlogHeadingTitleRequest {
  linkText: string;
  children: React.ReactNode;
}

export const BlogHeadingTitle = ({ linkText, children }: IBlogHeadingTitleRequest) => {
  return (
    <Container>
      <Title>{children}</Title>
      <Link href="/">
        <LinkButton>
          {linkText} <FiChevronsRight />
        </LinkButton>
      </Link>
      <LineDivider />
    </Container>
  );
};
