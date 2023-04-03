import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Avatar, Box, Grid, Typography } from "@mui/material";

import SideNav from "../../layout/sideNav/side-nav";

import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });
// montserrat
export default function Home() {
  // const List: any | any = [];
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Box sx={{ display: "flex", fontFamily: "Montserrat" }}>
        <SideNav />
      </Box>
    </>
  );
}
