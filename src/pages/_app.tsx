import { useEffect, useState, useMemo } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from '../contexts/AuthContext';
import { RequestProvider } from '../contexts/RequestContext';

import GlobalStyles from '../styles/global-styles';
import { themes } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [isMounted, setIsMounted] = useState(false);

  const [preferedTheme, setPreferedTheme] = useState<string>('light');
  const theme = useMemo(() => preferedTheme, [preferedTheme]);

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

    //Change the isMounted to true, then the component can render
    setIsMounted(true);

    //Add the class that will give body a background-color transition
    const body = document.querySelector('body');
    body.classList.add('mounted');

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <AuthProvider>
      <RequestProvider>
        <ThemeProvider theme={themes[theme]}>
          {isMounted && <Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />}
          <GlobalStyles theme={themes[theme]} />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </RequestProvider>
    </AuthProvider>
  );
}

export default MyApp;
