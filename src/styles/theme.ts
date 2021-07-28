import { DefaultTheme } from 'styled-components/native';

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

  dashboard: {
    colors: {
      black: '#10151b',
      lighterBlack: '#141821',
      darkGray: '#4877d3',
      lightBlue: '#1c1f26',
    },
    font: {
      colors: {
        lightBlue: '#abbbdd',
        gray: '#313a4b',
      },
      sizes: {
        small: '17px',
        big: '55px',
      },
    },
  },
};
