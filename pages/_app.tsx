import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createTheme, CssBaseline, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Layout from '../components/Layout';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
    },
    space: {},
    fonts: {},
  },
});

const lightTheme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#fff',
      text: '#1d1d1d',
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
