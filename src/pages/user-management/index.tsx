import { Box, Typography } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import SideNav from "../../../Layout/side-nav";
import VaultNav from "../../../Layout/vault-nav";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vh",
      }}
    >
      <Typography sx={{ textAlign: "center", mt: 10 }} variant="h1">
        NEXTPageWithLayout
      </Typography>
    </Box>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  const selectData = () => {
    console.log("data");
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        <SideNav />
        <VaultNav selectData={selectData} select={""} />
        {page}
      </Box>
    </>
  );
};
export default Page;
