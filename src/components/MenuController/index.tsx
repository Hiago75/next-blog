import { Dispatch, SetStateAction } from 'hoist-non-react-statics/node_modules/@types/react';
import { MenuBars } from './style';

interface MenuControllerRequest {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuOpen: boolean;
}

export const MenuController = ({ setMenuOpen, menuOpen }: MenuControllerRequest) => {
  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return <MenuBars onClick={handleMenuClick} size={32} />;
};
