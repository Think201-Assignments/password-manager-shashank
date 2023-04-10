import { Box, Stack } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import StepCreator from "../inc/stepcomponents/firststep";
import SideNav from "../../../../layout/sideNav/side-nav";
import CorrectionVaultNav from "../../../../layout/vaultNav/correction-vault-nav";

import { RotatingLines } from "react-loader-spinner";

const Page: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "60vw",
        display: "flex",
        justifyContent: "center",

        color: "#212121",
        fontSize: "25px",

        fontWeight: "600",
        pt: 10,
      }}
    >
      {" "}
      <Stack>
        Creating your account
        <Box
          sx={{ minWidth: "280px", display: "flex", justifyContent: "center" }}
        >
          Hold on!&nbsp;&nbsp;
          <RotatingLines
            strokeColor="grey"
            strokeWidth="3"
            animationDuration="0.75"
            width="30"
            visible={true}
          />
        </Box>
      </Stack>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        <>
          <SideNav />

          <CorrectionVaultNav />
        </>
        <PageWrapper>{page}</PageWrapper>
      </Box>
    </>
  );
};
export default Page;
