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
    dark: {
      background: '#1B1B1B',
      bgBlue: '52617B',
      primaryBlack: '#101010',
      lightBlue: '#5A8BD6',
      darkBlue: '#091323',

      font: {
        colors: {
          darkBlue: '#091323',
          white: '#F9FBFF',
          lightGray: '#A0AABA',
        },
      },
    },
    colors: {
      black: '#10151b',
      lighterBlack: '#141821',
      darkGray: '#1c1f26',
      lightBlue: '#4877d3',
    },
    font: {
      colors: {
        lightBlue: '#abbbdd',
        gray: '#313a4b',
        darkBlue: '#0a0c21',
      },
      sizes: {
        small: '17px',
        regular: '25px',
        big: '53px',
      },
    },
  },
};
