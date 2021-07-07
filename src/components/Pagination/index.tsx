import Link from 'next/link';

import { PaginationData } from '../../domain/posts/pagination';
import { Container, Button } from './style';

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
      <Button className={hasPreviousPage ? '' : 'inactive'}>
        <Link as={previousLink} href="/posts/page/[...param]">
          <a>Posts mais recentes</a>
        </Link>
      </Button>

      <Button className={hasNextPage ? '' : 'inactive'}>
        <Link as={nextLink} href="/posts/page/[...param]">
          <a>Posts mais antigos</a>
        </Link>
      </Button>
    </Container>
  );
}
