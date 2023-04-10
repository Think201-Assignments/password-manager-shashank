import { Box, TextField } from "@mui/material";
import React, { ReactElement } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import StepCreator from "../inc/stepcomponents/firststep";
import SideNav from "../../../../layout/sideNav/side-nav";
import CorrectionVaultNav from "../../../../layout/vaultNav/correction-vault-nav";
import { useRouter } from "next/router";

const Page: NextPageWithLayout = () => {
  const state = 4;
  const route = useRouter();
  const nextStep = () => {
    route.push("/organization/completed");
  };

  return (
    <StepCreator
      step={state}
      heading={"What’s your organization working on?"}
      subheading=" This could be anything like departments, projects."
      buttonText={"Next"}
      buttonfunction={nextStep}
    >
      {" "}
      <TextField
        sx={{ width: "488px" }}
        multiline
        placeholder="Eg: Finance,Marketing"
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
