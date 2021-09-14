import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import { NavItem } from './style';

export type NavLinkProps = {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
  className?: string;
  filledIcon?: React.ReactElement;
  outlineIcon?: React.ReactElement;
};

export const NavLink = ({
  href,
  exact = false,
  children,
  className,
  filledIcon,
  outlineIcon,
}: NavLinkProps) => {
  const { asPath } = useRouter();
  // Verify if the url matches with the actual one
  const isActive = exact ? asPath === href : asPath.startsWith(href);
  let styleClass = className;

  // Add the active class to the list if the "isActive" const is true;
  isActive ? (styleClass += ' active') : '';

  return (
    <Link href={href}>
      <NavItem className={styleClass}>
        {isActive ? filledIcon : outlineIcon}
        <a>{children}</a>
      </NavItem>
    </Link>
  );
};
