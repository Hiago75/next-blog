import styled from 'styled-components';
import { theme } from '../../styles/theme';

const { colors, textColors } = theme;

export const Container = styled.header`
  background-color: ${colors.primary};
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #29292e;

  a {
    color: ${textColors.primary};
    text-decoration: none;
    font-size: 25px;
    transition: opacity 200ms ease;
  }

  a:hover {
    opacity: 0.8;
  }
`;
