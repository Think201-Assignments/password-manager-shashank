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
import {motion as m} from "framer-motion"

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
 
  return (
    <>
    <Box sx={{display:"flex"}}>
    <SideNav />
        <m.main
    initial={{x:"-12%"}}animate={{x:"0%"}} transition={{duration:0.75,ease:"easeOut"}}
    exit={{opacity:1}}
>
      <Box sx={{ display: "flex" }}>
        {" "}
        {!onlyMediumScreen && (
          <>
            <CorrectionVaultNav />
            {/* <CorrectionListingNav selectspecific={undefined} /> */}

            {/* <VaultNav selectData={selectData} select={select} /> */}
          </>
        )}
        {/* <ContentNav long={true}>
          <PageWrapper>
            {page}
           
          </PageWrapper>
        </ContentNav> */}
      </Box>
      </m.main>
      </Box>
    </>
  );
};
export default Page;
