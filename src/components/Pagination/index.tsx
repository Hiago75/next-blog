import Link from 'next/link';

import { PaginationData } from '../../domain/posts/pagination';
import { Container, PreviousLink, NextLink } from './style';

export type PaginationProps = PaginationData;

export function Pagination({
  nextPage,
  category,
  numberOfPosts,
  postsPerPage,
  previousPage,
}: PaginationProps) {
  const categoryName = category || '';
  const nextLink = `/posts/page/${nextPage}/${categoryName}`;
  const previousLink = `/posts/page/${previousPage}/${categoryName}`;
  const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
  const hasPreviousPage = previousPage >= 1;

  return (
    <Container>
      {hasPreviousPage && (
        <PreviousLink>
          <Link as={previousLink} href="/posts/page/[...param]">
            <a>Previous</a>
          </Link>
        </PreviousLink>
      )}

      {hasNextPage && (
        <NextLink>
          <Link as={nextLink} href="/posts/page/[...param]">
            <a>Next</a>
          </Link>
        </NextLink>
      )}
    </Container>
  );
}
