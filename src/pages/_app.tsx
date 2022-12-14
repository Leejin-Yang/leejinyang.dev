import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps<{ fallback: any }>) {
  const { fallback } = pageProps;

  return (
    <SWRConfig value={{ fallback }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
