import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Avatar, Box, Grid, Typography } from "@mui/material";

import ListingNav from "../../layout/listingNav/listing-nav";
import SideNav from "../../layout/sideNav/side-nav";
import VaultNav from "../../layout/vaultNav/vault-nav";
import ContentNav from "../../layout/contentNav/content-nav";
import Content from "../componenets/contentBox";
import { LineAxisOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import { Montserrat } from "next/font/google";
import { tableData } from "../componenets/dummydata/containerData";

const inter = Montserrat({ subsets: ["latin"] });
// montserrat
export default function Home() {
  const [select, setSelect] = useState("All password");
  const selectData = (data: any) => {
    setSelect(data);
  };
  const [specific, setSpecific] = useState("Google");
  const selectspecific = (data: any) => {
    setSpecific(data);
  };
  useEffect(() => {}, [specific]);
  useEffect(() => {}, [select]);

  const arr = tableData.filter((d) => d.company == specific);
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
        {/* <VaultNav selectData={selectData} select={select} />
        <ListingNav selectspecific={selectspecific} data={select} />

        <ContentNav>
          <Content tableData={arr[0]} />
        </ContentNav> */}
      </Box>

      {/* </VaultNav> */}
    </>
  );
}
