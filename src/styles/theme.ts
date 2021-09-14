import { DefaultTheme } from 'styled-components/native';

export const darkTheme: DefaultTheme = {
  colors: {
    mainBackground: '#101010',
    alternativeBackground: '#1B1B1B',
    contrastBackground: '#091323',
    contrastColor: '#5A8BD6',
  },

  fonts: {
    primaryFont: '#F9FBFF',
    contrastFont: '#091323',
    smothFont: '#A0AABA',
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    mainBackground: '#F9FBFF',
    alternativeBackground: '#E4EAF2',
    contrastBackground: '#E4EAF2',
    contrastColor: '#5A8BD6',
  },

  fonts: {
    primaryFont: '#091323',
    contrastFont: '#F9FBFF',
    smothFont: '#4B5971',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const theme: DefaultTheme = {
  colors: {
    black: '#121214',
    mediumBlue: '#8257e5',
    darkBlue: '#030017',
    darkGray: '#29292e',

    gradients: {
      purpleToGray: 'linear-gradient(90deg ,#1c1529,#222226)',
    },
  },

  font: {
    colors: {
      lightest: '#dadadf',
      light: '#e1e1e6',
      lightGray: '#9e9e9e',
    },
    sizes: {
      small: '17px',
      regular: '23px',
    },
  },
};
