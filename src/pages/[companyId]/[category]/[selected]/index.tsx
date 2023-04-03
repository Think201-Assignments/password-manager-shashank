import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { tableData } from "@/componenets/dummydata/containerData";

import Content from "@/componenets/contentBox";
import SideNav from "../../../../../layout/sideNav/side-nav";

import ContentNav from "../../../../../layout/contentNav/content-nav";
import CorrectionVaultNav from "../../../../../layout/vaultNav/correction-vault-nav";
import CorrectionListingNav from "../../../../../layout/listingNav/correction-listing-nav";

import { useListingContext } from "../../../../../context/ListingContext";

const Page: NextPageWithLayout = () => {
  const router = useRouter();

  const { companyId, category, selected } = router.query;
  const query = selected && selected[0].toUpperCase() + selected.slice(1);
  const { listingdata } = useListingContext();

  return (
    <Box>
      <Content
        tableData={listingdata?.filter(
          (d) => d.company.toLowerCase() == query?.toLowerCase()
        )}
      />
    </Box>
  );
};
//We will get specific
Page.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter();
  const { listingdata } = useListingContext();
  const { companyId, category, selected } = router.query;
  const query = selected && selected[0].toUpperCase() + selected.slice(1);
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down(1370));

  const arr = listingdata.filter((d) => d.company == query);
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
        <ContentNav>{page}</ContentNav>
      </Box>
    </>
  );
};
export default Page;
