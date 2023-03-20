import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../styles/createEmotionCache";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ["500", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

// import type { AppProps } from "next/app";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}
// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
//   emotionCache?: EmotionCache;
// };

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {getLayout(
          <main className={montserrat.className}>
            <Component {...pageProps} />
          </main>
        )}
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
