import { Box, TextField } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import StepCreator from "../inc/stepcomponents/firststep";
import SideNav from "../../../../layout/sideNav/side-nav";
import CorrectionVaultNav from "../../../../layout/vaultNav/correction-vault-nav";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const state = 2;
  const route = useRouter();
  const nextStep = () => {
    route.push("/organization/add-image");
  };

  return (
    <StepCreator
      step={state}
      heading={"Who else do you want to invite?"}
      subheading=" Addd colleagues by email"
      buttonfunction={nextStep}
      buttonText={"Next"}
    >
      <TextField
        sx={{ width: "488px" }}
        multiline
        placeholder="Eg: ellis@gmail.com"
        inputProps={{
          shrink: "false",
          style: { height: "123px" },
        }}
      />
    </StepCreator>
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
