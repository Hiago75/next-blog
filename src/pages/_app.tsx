import { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';

import GlobalStyles from '../styles/global-styles';
import { themes } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  // Change the theme
  function toggleTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={themes[theme]}>
        <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
        <GlobalStyles theme={themes[theme]} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
