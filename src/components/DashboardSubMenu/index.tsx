import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';

import { SidebarLabel, SidebarList, SidebarLinkContainer } from './style';

import { ISidebarData, subNav } from '../../interfaces/ISidebarData';
import { AuthContext } from '../../contexts/AuthContext';
import { DropdownItem } from '..';

interface ISubMenuRequest {
  item: ISidebarData;
}

export const SubMenu = ({ item }: ISubMenuRequest) => {
  const { asPath, push } = useRouter();
  const { user } = useContext(AuthContext);

  const [isActive, setIsActive] = useState(false);
  const [displaySubNav, setDisplaySubNav] = useState(false);
  const [classList, setClassList] = useState('');
  const [filteredSubnav, setFilteredSubnav] = useState<subNav[]>(undefined);

  // Redirect the user to the page that he/she clicked
  function handleLinkClick() {
    if (item.subNav) return setDisplaySubNav(!displaySubNav);

    push(item.path);
  }

  // Remove the items that should not be shown to this user
  function filterNavItem() {
    const subnav = item.subNav?.filter((subItem) => {
      if (subItem.admin && !user.admin) return;
      return subItem;
    });

    if (subnav?.length === 1) return subnav.pop();

    setFilteredSubnav(subnav);
  }

  // Verify if the actual path is equal to the item path
  function verifyActiveItems() {
    const isActive = item.exact ? asPath === item.path : asPath.startsWith(item.path);

    if (!isActive) return;

    setDisplaySubNav(true);
    setIsActive(true);
    setClassList('active');
  }

  useEffect(() => {
    verifyActiveItems();
    filterNavItem();
  }, []);

  return (
    <>
      <SidebarLinkContainer className="unselectable" onClick={handleLinkClick}>
        <SidebarList className={classList}>
          {isActive ? item.filledIcon : item.outlineIcon}
          <SidebarLabel className={classList}>{item.title}</SidebarLabel>
          {filteredSubnav?.length > 0 ? (
            <span>{displaySubNav ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}</span>
          ) : undefined}
        </SidebarList>
      </SidebarLinkContainer>

      {displaySubNav &&
        filteredSubnav?.length > 0 &&
        filteredSubnav.map((subItem, index) => {
          return <DropdownItem subItem={subItem} key={index} />;
        })}
    </>
  );
};
