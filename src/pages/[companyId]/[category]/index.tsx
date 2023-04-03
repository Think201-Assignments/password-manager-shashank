import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";

import SideNav from "../../../../layout/sideNav/side-nav";

import ContentNav from "../../../../layout/contentNav/content-nav";

import CorrectionVaultNav from "../../../../layout/vaultNav/correction-vault-nav";
import CorrectionListingNav from "../../../../layout/listingNav/correction-listing-nav";
import { motion as m } from "framer-motion";
import { useListingContext } from "../../../../context/ListingContext";
import { allpassword } from "@/componenets/dummydata/containerData";
import Content from "@/componenets/contentBox";

const Page: NextPageWithLayout = () => {
  const [password, setPassword] = useState<any | []>([]);
  const { listingdata } = useListingContext();
  useEffect(() => setPassword(allpassword), [listingdata]);
  return (
    <Box>
      <Content
        tableData={listingdata?.filter(
          (d) => d.company.toLowerCase() == password[0]?.text?.toLowerCase()
        )}
      />
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down(1370));

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        {!onlyMediumScreen && (
          <>
            <SideNav />

            <CorrectionVaultNav />
            <CorrectionListingNav selectspecific={undefined} />
          </>
        )}
        {/* <m.main
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          exit={{ opacity: 1 }}
        > */}
        <ContentNav long={true}>
          <PageWrapper>{page}</PageWrapper>
        </ContentNav>
        {/* </m.main> */}
      </Box>
    </>
  );
};
export default Page;
