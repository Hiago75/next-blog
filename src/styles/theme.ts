import { DefaultTheme } from 'styled-components/native';

export const darkTheme: DefaultTheme = {
  colors: {
    mainBackground: '#101010',
    alternativeBackground: '#1B1B1B',
    contrastBackground: '#091323',
    contrastColor: '#5A8BD6',
    errorColor: '#aa2020',
    successColor: '#22b479',
  },

  fonts: {
    primaryFont: '#F9FBFF',
    contrastFont: '#091323',
    smothFont: '#A0AABA',
    lightSmothFont: '#d5dce8',
  },
};

export const lightTheme: DefaultTheme = {
  colors: {
    mainBackground: '#F9FBFF',
    alternativeBackground: '#E4EAF2',
    contrastBackground: '#E4EAF2',
    contrastColor: '#5A8BD6',
    errorColor: '#aa2020',
    successColor: '#22b479',
  },

  fonts: {
    primaryFont: '#091323',
    contrastFont: '#F9FBFF',
    smothFont: '#4B5971',
    lightSmothFont: '#273040',
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
