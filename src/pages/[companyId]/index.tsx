import { Box, Typography } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";
import { NextPageWithLayout } from "../_app";
import { useRouter } from "next/router";
import { tableData } from "@/componenets/dummydata/containerData";
import SideNav from "../../../layout/sideNav/side-nav";

import CorrectionVaultNav from "../../../layout/vaultNav/correction-vault-nav";

import { motion as m } from "framer-motion";

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

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />

        <Box sx={{ display: "flex" }}>
          {" "}
          <>
            <CorrectionVaultNav />
          </>
        </Box>
        {/* </m.main> */}
      </Box>
    </>
  );
};
export default Page;
