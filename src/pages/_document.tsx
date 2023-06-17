import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { GA_TRACKING_ID } from '@/utils/gtag';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='ko'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400&display=swap&text=%C2%A9%202022%20Leejin%20Yang'
            rel='stylesheet'
          />
          <link rel='icon' href='/favicon.ico' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='180x180'
            href='/apple-icon-180x180.png'
          />
          <link rel='manifest' href='/manifest.json' />
          {/* Global site tag (gtag.js) - Google Analytics */}
          <Script
            strategy='afterInteractive'
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id='gtag-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: String.raw`
                window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push(arguments); } gtag('js', new
                Date()); gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
