import { Box, TextField } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import CorrectionVaultNav from "../../../layout/vaultNav/correction-vault-nav";
import SideNav from "../../../layout/sideNav/side-nav";

import StepCreator from "./inc/stepcomponents/firststep";

const Page: NextPageWithLayout = () => {
  const [state, setState] = useState(1);
  function nextStep() {
    console.log("its Working");
    setState(state + 1);
  }
  function prevStep() {
    setState(state - 1);
  }

  switch (state) {
    case 1:
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
              shrink: false,
            }}
          />
        </StepCreator>
      );
    case 2:
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
              shrink: false,
              style: { height: "123px" },
            }}
          />
        </StepCreator>
      );
    case 3:
      return (
        <StepCreator
          step={state}
          heading={"Choose an icon or an image to your vault"}
          subheading=" This will be the image of your Vault – choose something that your team will recognise."
          buttonText={"Upload"}
          buttonfunction={nextStep}
        ></StepCreator>
      );
    case 4:
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
              shrink: false,
              style: { height: "123px" },
            }}
          />
        </StepCreator>
      );
    default:
      return (
        <StepCreator
          heading={"Error while Processing your request"}
          subheading="d"
          buttonText={"Next"}
          buttonfunction={prevStep}
        ></StepCreator>
      );
  }
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
