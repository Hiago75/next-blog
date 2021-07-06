import Link from 'next/link';
import { PaginationData } from '../../domain/posts/pagination';

export type AllPostsLinkProps = {
  pagination: PaginationData;
};

export function AllPostsLink({ pagination }: AllPostsLinkProps) {
  return (
    !pagination?.nextPage && (
      <Link as="/posts/page/1" href="/posts/page/[...param]">
        <a>Ver todos os posts</a>
      </Link>
    )
  );
}
