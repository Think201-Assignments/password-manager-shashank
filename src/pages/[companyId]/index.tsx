import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import { tableData } from "@/componenets/dummydata/containerData";
import SideNav from "../../../layout/sideNav/side-nav";
import VaultNav from "../../../layout/vaultNav/vault-nav";
import ListingNav from "../../../layout/listingNav/listing-nav";
import ContentNav from "../../../layout/contentNav/content-nav";
import { Content } from "next/font/google";
import CorrectionVaultNav from "../../../layout/vaultNav/correction-vault-nav";
import CorrectionListingNav from "../../../layout/listingNav/correction-listing-nav";

const Page: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        justifyContent: "center",

        pt: "20vh",
        pr: "70vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          height: "120px",
          width: "220px",
          ml: 20,
          p: 1,
          border: "1px dashed black",
        }}
      >
        <Typography>select the Category</Typography>{" "}
      </Box>
    </Box>
  );
};
//We will get specific
Page.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter();
  const { companyId } = router.query;
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down(1370));
  //   const [select, setSelect] = useState("");
  //   const selectData = (data: any) => {
  //     setSelect(data);
  //   };
  //   const [specific, setSpecific] = useState("Google");
  //   const selectspecific = (data: any) => {
  //     setSpecific(data);
  //   };
  //   useEffect(() => {}, [specific]);
  //   useEffect(() => {}, [select]);

  //   const arr = tableData.filter((d) => d.company == specific);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        {!onlyMediumScreen && (
          <>
            <SideNav />
            <CorrectionVaultNav />
            {/* <CorrectionListingNav selectspecific={undefined} /> */}

            {/* <VaultNav selectData={selectData} select={select} /> */}
          </>
        )}
        <ContentNav long={true}>
          <PageWrapper>
            {page}
            {/* <Content tableData={arr[0]} /> */}
          </PageWrapper>
        </ContentNav>
      </Box>
    </>
  );
};
export default Page;
