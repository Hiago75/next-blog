import { useEffect, useState, useMemo } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';
import { RequestProvider } from '../contexts/RequestContext';

import GlobalStyles from '../styles/global-styles';
import { themes } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [preferedTheme, setPreferedTheme] = useState<string>();
  const theme = useMemo(() => preferedTheme || 'light', [preferedTheme]);

  // Change the theme
  function toggleTheme() {
    const themeSetted = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('@colster-blog/theme', JSON.stringify(themeSetted));
    setPreferedTheme(themeSetted);
  }

  //Define the prefered theme when the user enter the page
  useEffect(() => {
    const selectedTheme = JSON.parse(localStorage.getItem('@colster-blog/theme'));
    selectedTheme && setPreferedTheme(selectedTheme);
  }, []);

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
