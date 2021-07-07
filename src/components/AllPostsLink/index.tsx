import Link from 'next/link';

import { Container } from './style';
import { FiArrowRight } from 'react-icons/fi';

import { PaginationData } from '../../domain/posts/pagination';

export type AllPostsLinkProps = {
  pagination: PaginationData;
};

export function AllPostsLink({ pagination }: AllPostsLinkProps) {
  return (
    !pagination?.nextPage && (
      <Container>
        <Link as="/posts/page/1" href="/posts/page/[...param]">
          <a>
            Ver mais <FiArrowRight />
          </a>
        </Link>
      </Container>
    )
  );
}
