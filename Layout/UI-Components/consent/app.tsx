import React from "react";

const napp = () => {
  return <div>app</div>;
};

export default napp;

// app.tsx
// import * as React from "react";
// import Head from "next/head";
// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import { CacheProvider, EmotionCache } from "@emotion/react";
// import theme from "@/styles/theme";
// import createEmotionCache from "@/styles/createEmotionCache";
// import NavBar from "./appBar";

// import Form from "./SignIn.tsx/SignIn";
// import Layout from "@/layout/layout";

// import { ReactElement, ReactNode, useState } from "react";
// import type { NextPage } from "next";
// import type { AppProps } from "next/app";
// import { Pageview, Router } from "@mui/icons-material";
// import { pageview } from "./ga";
// import { useRouter } from "next/router";
// import AppStore, { useUserContext } from "@/context/store";
// import GoogleAnalytics from "@/componenet/googleAnalytics";
// import { getCookie } from "cookies-next";

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
//   emotionCache?: EmotionCache;
// };

// // Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();
// // type componentWithPageLayout = AppProps & {
// //   PageLayout?: React.ComponentType;
// // };
// interface MyAppProps extends AppProps {
//   emotionCache?: EmotionCache;
// }

// export default function MyApp({
//   Component,
//   pageProps,
//   emotionCache = clientSideEmotionCache,
// }: AppPropsWithLayout) {
//   const [allowGoogleAnalytics, setallowGoogleAnalytics] = React.useState(false);

//   // let allowGoogleAnalytics;
//   // React.useEffect(() => {
//   //   const allowGoogleAnalytics = localStorage.getItem("analytics_storage");

//   //   // allowGoogleAnalytics = !!value ? JSON.parse(value) : false;

//   //   // console.log("userStatus", allowGoogleAnalytics);
//   // }, []);
//   const d = getCookie("Cookie");
//   const router = useRouter();
//   // const [variable, setVaraible] = useState(false);
//   React.useEffect(() => {
//     const value = localStorage.getItem("status");
//     const temp = !!value ? JSON.parse(value) : undefined;
//     if (temp) {
//       console.log("hey i am cookie", temp?.GoogleAnalytics);
//       setallowGoogleAnalytics(temp.GoogleAnalytics);
//     }
//     // console.log(allowGoogleAnalytics);
//     // setallowGoogleAnalytics(allowGoogleAnalytics);
//   }, []);

//   // React.useEffect(() => {
//   //   const value = localStorage.getItem("analytics_storage");
//   //   const allowGoogleAnalytics = !!value ? JSON.parse(value) : undefined;
//   //   // console.log(allowGoogleAnalytics);
//   //   setallowGoogleAnalytics(allowGoogleAnalytics);
//   // }, []);

//   React.useEffect(() => {
//     const handleRouteChange = (url: any) => {
//       pageview(url);
//     };
//     router.events.on("routeChangeComplete", handleRouteChange);
//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, [router.events]);
//   // Use the layout defined at the page level, if available
//   const getLayout = Component.getLayout ?? ((page) => page);

//   return getLayout(
//     <CacheProvider value={emotionCache}>
//       <Head>
//         <meta name="viewport" content="initial-scale=1, width=device-width" />
//       </Head>
//       <ThemeProvider theme={theme}>
//         <AppStore>
//           {/* {console.log("This is my state", variable)} */}
//           <Component {...pageProps} />
//           {/* {variable ? <GoogleAnalytics /> : null} */}
//           {allowGoogleAnalytics ? <GoogleAnalytics /> : null}
//         </AppStore>
//       </ThemeProvider>
//     </CacheProvider>
//   );
// }
