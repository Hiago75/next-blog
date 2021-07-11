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

  if (hasPreviousPage || hasNextPage) {
    return (
      <Container>
        <Link as={previousLink} href="/posts/page/[...param]">
          <Button className={hasPreviousPage ? '' : 'inactive'}>
            <a>Posts mais recentes</a>
          </Button>
        </Link>

        <Link as={nextLink} href="/posts/page/[...param]">
          <Button className={hasNextPage ? '' : 'inactive'}>
            <a>Posts mais antigos</a>
          </Button>
        </Link>
      </Container>
    );
  } else {
    return <></>;
  }
}
