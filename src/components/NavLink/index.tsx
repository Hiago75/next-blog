import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { NavItem } from './style';

export type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
};

export const NavLink = ({ href, exact = false, children, className }: NavLinkProps) => {
  const { asPath } = useRouter();
  const isActive = exact ? asPath === href : asPath.startsWith(href);
  let styleClass = className;

  isActive ? (styleClass += ' active') : '';

  return (
    <Link href={href}>
      <NavItem className={styleClass}>
        <a>{children}</a>
      </NavItem>
    </Link>
  );
};
