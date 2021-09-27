import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

import { ISidebarData } from '../../interfaces/ISidebarData';
import {
  SidebarLabel,
  SidebarList,
  SidebarLinkContainer,
  DropdownLink,
  DropdownLinkContainer,
  DropdownLabel,
} from './style';

interface ISubMenuRequest {
  item: ISidebarData;
}

export const SubMenu = ({ item }: ISubMenuRequest) => {
  const { asPath, push } = useRouter();
  const [displaySubNav, setDisplaySubNav] = useState(false);

  const isActive = asPath === item.path;
  const classList = isActive || displaySubNav ? 'active' : undefined;

  function handleLinkClick() {
    if (item.subNav) return setDisplaySubNav(!displaySubNav);

    push(item.path);
  }

  useEffect(() => {
    if (isActive) setDisplaySubNav(true);
  }, []);

  return (
    <>
      <SidebarLinkContainer className="unselectable" onClick={handleLinkClick}>
        <SidebarList className={classList}>
          {isActive ? item.filledIcon : item.outlineIcon}
          <SidebarLabel className={classList}>{item.title}</SidebarLabel>
          {item.subNav ? (
            <span>{displaySubNav ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}</span>
          ) : undefined}
        </SidebarList>
      </SidebarLinkContainer>

      {displaySubNav &&
        item.subNav &&
        item.subNav.map((item, index) => (
          <DropdownLink href={item.path} key={index}>
            <DropdownLinkContainer>
              <DropdownLabel className={asPath === item.path ? 'active' : undefined}>
                {item.title}
              </DropdownLabel>
            </DropdownLinkContainer>
          </DropdownLink>
        ))}
    </>
  );
};
