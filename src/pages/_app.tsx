import '@/styles/globals.scss';

import ThemeProvider from 'contexts/ThemeContext';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps<{ fallback: any }>) {
  const { fallback } = pageProps;

  return (
    <SWRConfig value={{ fallback }}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
