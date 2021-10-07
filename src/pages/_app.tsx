import { useState } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';
import { RequestProvider } from '../contexts/RequestContext';

import GlobalStyles from '../styles/global-styles';
import { themes } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light');

  // Change the theme
  function toggleTheme() {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <AuthProvider>
      <RequestProvider>
        <ThemeProvider theme={themes[theme]}>
          <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
          <GlobalStyles theme={themes[theme]} />
        </ThemeProvider>
      </RequestProvider>
    </AuthProvider>
  );
}

export default MyApp;
