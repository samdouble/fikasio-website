import type { AppProps } from 'next/app';
import Script from 'next/script';
import ReactGA from 'react-ga4';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const GA4_ID = 'G-NNS66W328Q';
ReactGA.initialize(GA4_ID);

const App = ({ Component, pageProps }: AppProps) => {

  return (
    <>
      { /* Google Analytics 4 */ }
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA4_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default App;
