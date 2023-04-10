import { Box, TextField } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import StepCreator from "../inc/stepcomponents/firststep";
import SideNav from "../../../../layout/sideNav/side-nav";
import CorrectionVaultNav from "../../../../layout/vaultNav/correction-vault-nav";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const state = 1;
  const route = useRouter();
  const nextStep = () => {
    route.push("/organization/invite");
  };

  return (
    <StepCreator
      step={state}
      heading={"What’s the name of your company or team?"}
      subheading="  This will be the name of your vault – choose something that your team
          will recognise."
      buttonfunction={nextStep}
      buttonText={"Next"}
    >
      <TextField
        sx={{ width: "488px" }}
        id="outlined-basic"
        placeholder="John@domain.com"
        size="small"
        inputProps={{
          style: {
            height: "32px",
          },
          shrink: "false",
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
