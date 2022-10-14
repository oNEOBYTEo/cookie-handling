import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import { Theme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Cookies from 'js-cookie';

import { darkTheme, lightTheme, customTheme } from '../themes';

import '../styles/globals.css';
interface Props extends AppProps {
  theme: string;
}

function MyApp({ Component, pageProps, theme = 'dark' }: Props) {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme') || 'light';

    const selectedTheme: Theme =
      cookieTheme === 'light'
        ? lightTheme
        : cookieTheme === 'dark'
        ? darkTheme
        : customTheme;

    setCurrentTheme(selectedTheme);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
