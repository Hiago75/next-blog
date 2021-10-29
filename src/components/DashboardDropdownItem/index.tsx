import { useRouter } from 'next/router';
import { useState } from 'react';
import { subNav } from '../../interfaces/ISidebarData';
import { DropdownLabel, DropdownLink, DropdownLinkContainer } from './style';

interface IDropdownItem {
  subItem: subNav;
}

export const DropdownItem = ({ subItem }: IDropdownItem) => {
  const { asPath } = useRouter();
  const [isActive] = useState(
    subItem.exact ? asPath === subItem.path : asPath.startsWith(subItem.path),
  );

  return (
    <DropdownLink href={subItem.path}>
      <DropdownLinkContainer>
        <DropdownLabel className={isActive ? 'active' : undefined}>{subItem.title}</DropdownLabel>
      </DropdownLinkContainer>
    </DropdownLink>
  );
};
