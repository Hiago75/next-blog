import { theme } from '../styles/theme';
import { Theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    colors: {
      black: string;
      mediumBlue: string;
      darkBlue: string;
      darkGray: string;

      gradients: {
        purpleToGray: string;
      };
    };

    font: {
      colors: {
        lightest: string;
        light: string;
        lightGray: string;
      };
      sizes: {
        small: string;
        regular: string;
      };
    };

    dashboard: {
      dark: {
        background: string;
        bgBlue: string;
        primaryBlack: string;
        lightBlue: string;
        darkBlue: string;

        font: {
          colors: {
            darkBlue: string;
            white: string;
            lightGray: string;
          };
        };
      };
      colors: {
        black: string;
        lighterBlack: string;
        darkGray: string;
        lightBlue: string;
      };
      font: {
        colors: {
          lightBlue: string;
          darkBlue: string;
          gray: string;
        };

        sizes: {
          small: string;
          regular: string;
          big: string;
        };
      };
    };
  }
}
