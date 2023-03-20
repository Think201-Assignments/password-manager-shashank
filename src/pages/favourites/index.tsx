import { Box } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import ContentNav from "../../../Layout/content-nav";
import ListingNav from "../../../Layout/listing-nav";
import SideNav from "../../../Layout/side-nav";
import VaultNav from "../../../Layout/vault-nav";
import Content from "../data";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return <Box> </Box>;
};
Page.getLayout = function getLayout(page: ReactElement) {
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
      color: "red",
    },
    {
      company: "Milan",
      login: "Dummy@123",
      password: "45_6tg5d%3f01d",
      token: "Milan",
      link: "https://mui.com/material-ui/react-text-field/.asp",
      tags: ["admin", "git"],
      color: "purple",
    },
    {
      company: "Google",
      login: "Dummy@google",
      password: "fdfdfdf",
      token: "Null",
      link: "dummyjson.com",
      tags: ["admin", "git"],
      color: "green",
    },
    {
      company: "Figma",
      login: "thepeopleteam@think201.com",
      password: "45_6tg5d%3f01d",
      token: "token",
      link: "https://www.figma.com",
      tags: ["admin", "git"],
      color: "orange",
    },
    {
      company: "Storyblocks",
      login: "thepeopleteam@think201.com",
      password: "password",
      token: "something",
      link: "https://www.figma.com",
      tags: ["admin", "git"],
      color: "",
    },
  ];
  const arr = tableData.filter((d) => d.company == specific);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        <SideNav />
        <VaultNav selectData={selectData} select={select} />
        <ListingNav selectspecific={selectspecific} data={select} />
        <ContentNav>
          {page} <Content tableData={arr[0]} />
        </ContentNav>
      </Box>
    </>
  );
};
export default Page;
