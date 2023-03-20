import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Avatar, Box, Grid, Typography } from "@mui/material";

import ListingNav from "../../Layout/listing-nav";
import SideNav from "../../Layout/side-nav";
import VaultNav from "../../Layout/vault-nav";
import ContentNav from "../../Layout/content-nav";
import Content from "./data";
import { LineAxisOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });
// montserrat
export default function Home() {
  const [select, setSelect] = useState("All password");
  const selectData = (data: any) => {
    setSelect(data);
    console.log(select);
  };
  const [specific, setSpecific] = useState("Google");
  const selectspecific = (data: any) => {
    console.log(data);
    setSpecific(data);
  };
  useEffect(() => {
    console.log(specific);
  }, [specific]);
  useEffect(() => {
    console.log(select);
  }, [select]);
  const tableData = [
    {
      company: "Adobe design suite",
      login: "thepeopleteam@think201.com",
      password: "45_6tg5d%3f01d",
      token: "Adobedesign",
      link: "https://www.w3schools.com/js/js_loop_for.asp",
      tags: ["admin", "git"],
    },
    {
      company: "Milan",
      login: "Dummy@123",
      password: "45_6tg5d%3f01d",
      token: "Milan",
      link: "https://mui.com/material-ui/react-text-field/.asp",
      tags: ["admin", "git"],
    },
    {
      company: "Google",
      login: "Dummy@google",
      password: "fdfdfdf",
      token: "Null",
      link: "dummyjson.com",
      tags: ["admin", "git"],
    },
    {
      company: "Figma",
      login: "thepeopleteam@think201.com",
      password: "45_6tg5d%3f01d",
      token: "token",
      link: "https://www.figma.com",
      tags: ["admin", "git"],
    },
    {
      company: "Storyblocks",
      login: "thepeopleteam@think201.com",
      password: "password",
      token: "something",
      link: "https://www.figma.com",
      tags: ["admin", "git"],
    },
  ];
  const arr = tableData.filter((d) => d.company == specific);
  // const List: any | any = [];
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <VaultNav selectData={selectData} select={select} />
        <ListingNav selectspecific={selectspecific} data={select} />

        <ContentNav>
          <Content tableData={arr[0]} />
        </ContentNav>
      </Box>

      {/* </VaultNav> */}
    </>
  );
}
