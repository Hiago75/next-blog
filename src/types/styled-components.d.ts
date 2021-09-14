import { theme } from '../styles/theme';
import { Theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    colors: {
      mainBackground: string;
      alternativeBackground: string;
      contrastBackground: string;
      contrastColor: string;
    };
    fonts: {
      primaryFont: string;
      smothFont: string;
      contrastFont: string;
    };
  }
}
