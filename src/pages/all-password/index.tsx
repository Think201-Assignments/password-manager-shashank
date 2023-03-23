import { Box } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import ContentNav from "../../../Layout/content-nav";
import ListingNav from "../../../Layout/listing-nav";
import SideNav from "../../../Layout/side-nav";
import VaultNav from "../../../Layout/vault-nav";
import Content from "../data";
import { NextPageWithLayout } from "../_app";
import PageWrapper from "../page-wrapper";
import { tableData } from "../containerData";
const Page: NextPageWithLayout = () => {
  return <Box> </Box>;
};
//We will get specific
Page.getLayout = function getLayout(page: ReactElement) {
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
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        <SideNav />
        <VaultNav selectData={selectData} select={select} />
        <ListingNav selectspecific={selectspecific} data={select} />
        <ContentNav>
          <PageWrapper>
            {page}
            <Content tableData={arr[0]} />
          </PageWrapper>
        </ContentNav>
      </Box>
    </>
  );
};
export default Page;
