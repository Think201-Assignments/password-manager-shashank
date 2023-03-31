import { Box, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import PageWrapper from "@/componenets/animate/page-wrapper";

import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { tableData } from "@/componenets/dummydata/containerData";
import SideNav from "../../../../layout/sideNav/side-nav";
import VaultNav from "../../../../layout/vaultNav/vault-nav";
import ListingNav from "../../../../layout/listingNav/listing-nav";
import ContentNav from "../../../../layout/contentNav/content-nav";
import Content from "@/componenets/contentBox";

const Page: NextPageWithLayout = () => {
  return <Box> </Box>;
};
//We will get specific
Page.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter();
  const { companyId, category } = router.query;
  const theme = useTheme();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down(1370));
  const [select, setSelect] = useState("");
  const selectData = (data: any) => {
    setSelect(data);
  };
  const [specific, setSpecific] = useState("Google");
  const selectspecific = (data: any) => {
    setSpecific(data);
  };
  useEffect(() => {}, [specific]);
  useEffect(() => {}, [select]);

  const arr = tableData.filter((d) => d.company == specific);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {" "}
        {!onlyMediumScreen && (
          <>
            <SideNav />
            <VaultNav selectData={selectData} select={select} />
            <ListingNav
              selectspecific={selectspecific}
              data={select}
              //   baselink={`/${companyId}/${category}`}
            />
          </>
        )}
        <ContentNav>
          <PageWrapper>
            {page}
            <Content tableData={arr[0]} />
          </PageWrapper>
        </ContentNav>
      </Box>
    </>
  );
};
export default Page;
