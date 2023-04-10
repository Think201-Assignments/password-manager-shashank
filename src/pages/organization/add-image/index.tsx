import { Box } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import StepCreator from "../inc/stepcomponents/firststep";
import SideNav from "../../../../layout/sideNav/side-nav";
import CorrectionVaultNav from "../../../../layout/vaultNav/correction-vault-nav";
import { useRouter } from "next/router";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import "react-image-crop/dist/ReactCrop.css";
import ReactCrop, { Crop, PixelCrop } from "react-image-crop";
import Image from "next/image";
import Head from "next/head";
import { Title } from "@mui/icons-material";

const Page: NextPageWithLayout = () => {
  const [crop, setCrop] = useState<Crop>();
  const state = 3;
  const route = useRouter();
  const nextStep = () => {
    route.push("/organization/department");
  };

  return (
    <>
      <StepCreator
        step={state}
        heading={"Choose an icon or an image to your vault"}
        subheading=" This will be the image of your Vault – choose something that your team will recognise."
        buttonText={`Upload`}
        buttonIcons={<CloudUploadOutlinedIcon sx={{ mr: 2 }} />}
        sxbuttontext={{
          fontSize: "20px",
          mt: 4,
          textTransform: "none",
          borderRadius: "0px",
          height: "50px",
          width: "488px",
          color: "white",
          fontWeight: "500",
        }}
        buttonfunction={nextStep}
      >
        {" "}
        <Box sx={{ width: "488px", display: "flex", justifyContent: "center" }}>
          <ReactCrop crop={crop} circularCrop onChange={(c) => setCrop(c)}>
            <Image
              // fill

              alt={"12"}
              src={`/defaultimage.png`}
              width={200}
              height={184.09}
              quality={100}
              // sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
          </ReactCrop>
        </Box>
      </StepCreator>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      {/* <head>
        <title>dfdfdf</title>
      </head> */}
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
