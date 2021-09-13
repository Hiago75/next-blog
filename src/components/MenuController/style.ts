import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';

export const MenuBars = styled(FaBars)`
  display: none;
  position: relative;
  z-index: 3;

  @media (max-width: 900px) {
    display: block;
  }
`;
