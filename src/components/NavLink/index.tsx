import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { NavItem } from './style';

export type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const NavLink = ({ href, exact = false, children }: NavLinkProps) => {
  const { asPath } = useRouter();
  const isActive = exact ? asPath === href : asPath.startsWith(href);
  const className = isActive ? 'active' : '';

  return (
    <Link href={href}>
      <NavItem className={className}>
        <a>{children}</a>
      </NavItem>
    </Link>
  );
};
