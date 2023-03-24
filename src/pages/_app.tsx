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
import styles from "../styles/Home.module.css";
import GoogleAnalytics from "./gdpr/googleAnalytics";

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

export default function MyApp(props: MyAppProps) {
  const [allowGoogleAnalytics, setallowGoogleAnalytics] = React.useState(false);
  React.useEffect(() => {
    const value = localStorage.getItem("status");
    const temp = !!value ? JSON.parse(value) : undefined;
    if (temp) {
      console.log("hey i am cookie", temp?.GoogleAnalytics);
      setallowGoogleAnalytics(temp.GoogleAnalytics);
    }
    // console.log(allowGoogleAnalytics);
    // setallowGoogleAnalytics(allowGoogleAnalytics);
  }, []);

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <main className={styles.title}>
          {getLayout(<Component {...pageProps} />)}
          {allowGoogleAnalytics ? <GoogleAnalytics /> : null}
        </main>
        {/* <Component {...pageProps} /> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
