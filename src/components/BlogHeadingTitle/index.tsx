import Link from 'next/link';
import { FiChevronsRight } from 'react-icons/fi';

import { Container, Title, LinkButton, LineDivider } from './style';

interface IBlogHeadingTitleRequest {
  linkText?: string;
  linkHref?: string;
  children: React.ReactNode;
}

export const BlogHeadingTitle = ({ linkText, linkHref, children }: IBlogHeadingTitleRequest) => {
  return (
    <Container>
      <Title>{children}</Title>
      {linkHref && (
        <Link href={linkHref}>
          <LinkButton>
            {linkText} <FiChevronsRight />
          </LinkButton>
        </Link>
      )}
      <LineDivider />
    </Container>
  );
};
