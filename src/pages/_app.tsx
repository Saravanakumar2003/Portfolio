import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import NextNprogress from 'nextjs-progressbar'
import { GlobalStyles } from '../styles/global'
import { defaultTheme } from '../styles/themes/default'
import { Toaster } from '../components/Toaster'
import { MantineProvider } from '@mantine/core'
import { Analytics } from '@vercel/analytics/react';
import { initGA, logPageView } from '../utils/analytics';

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;
const google = process.env.NEXT_PUBLIC_GA_ID;

declare global {
  interface Window {
    GA_INITIALIZED: boolean;
  }
}

function useNormalScrollRoutes() {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll')
    })
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }

    logPageView();
  }, []);
}

function MyApp({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src={google}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DEXGX7MVS0');
          `}
        </script>
      </Head>
      <MantineProvider>
      <ThemeProvider theme={defaultTheme}>
        <NextNprogress
          color={defaultTheme.firstColor}
          startPosition={0.3}
          stopDelayMs={300}
          height={3}
          showOnShallow
        />

        <Toaster />
        <GlobalStyles />
        <Component {...pageProps} />
        <Analytics />
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
        <script src={botkey} defer></script>
      </ThemeProvider>
      </MantineProvider>
    </>
  )
}

export default MyApp
