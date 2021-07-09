import Link from 'next/link';

import { Container } from './style';
import { FiArrowRight } from 'react-icons/fi';

type CtaLinkProps = {
  as: string;
  href: string;
};

export function CtaLink({ as, href }: CtaLinkProps) {
  return (
    <Container>
      <Link as={as} href={href}>
        <a>
          Ver mais <FiArrowRight />
        </a>
      </Link>
    </Container>
  );
}
