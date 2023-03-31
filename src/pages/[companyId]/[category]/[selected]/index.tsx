import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { tableData } from "@/componenets/dummydata/containerData";

import Content from "@/componenets/contentBox";
import SideNav from "../../../../../layout/sideNav/side-nav";
import VaultNav from "../../../../../layout/vaultNav/vault-nav";
import ListingNav from "../../../../../layout/listingNav/listing-nav";
import ContentNav from "../../../../../layout/contentNav/content-nav";
import CorrectionVaultNav from "../../../../../layout/vaultNav/correction-vault-nav";
import CorrectionListingNav from "../../../../../layout/listingNav/correction-listing-nav";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  const { selected } = router.query;
  const arr = tableData.filter((d) => d.company == selected);
  return (
    <Box>
      <h1>Company-Name: {selected}</h1> <Content tableData={arr[0]} />
    </Box>
  );
};
//We will get specific
Page.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter();
  const { slected } = router.query;
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down(1370));
  const [select, setSelect] = useState("");
  const selectData = (data: any) => {
    setSelect(data);
  };
  const [routedatasetter, setRouteDataSetter] = useState("");
  const [specific, setSpecific] = useState("");
  const selectspecific = (data: any) => {
    setSpecific(data);
  };
  //   useEffect(() => {}, [specific]);
  //   useEffect(() => {}, [select]);

  const arr = tableData.filter((d) => d.company == slected);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        {!onlyMediumScreen && (
          <>
            {/* {slected} */}
            <SideNav />
            {/* <VaultNav selectData={selectData} select={select} />
            <ListingNav
              selectspecific={selectspecific}
              data={select}
              //   baselink={`/${companyId}/${category}`}
            /> */}
            <CorrectionVaultNav />
            <CorrectionListingNav selectspecific={undefined} />
          </>
        )}
        <ContentNav>
          <PageWrapper>{page}</PageWrapper>
        </ContentNav>
      </Box>
    </>
  );
};
export default Page;
