import { Dispatch, SetStateAction, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { MenuBars } from './style';

interface MenuControllerRequest {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
}

export const MenuController = ({ setMenuOpen, menuOpen }: MenuControllerRequest) => {
  const theme = useContext(ThemeContext);

  // Toggle menu state
  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return <MenuBars color={theme.fonts.primaryFont} onClick={handleMenuClick} size={32} />;
};
