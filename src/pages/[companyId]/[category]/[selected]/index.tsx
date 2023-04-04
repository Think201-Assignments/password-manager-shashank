import { Box, Skeleton, useMediaQuery, useTheme } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";

import { NextPageWithLayout } from "@/pages/_app";
import { useRouter } from "next/router";
import { tableData } from "@/componenets/dummydata/containerData";

import Content from "@/componenets/contentBox";
import SideNav from "../../../../../layout/sideNav/side-nav";

import ContentNav from "../../../../../layout/contentNav/content-nav";
import CorrectionVaultNav from "../../../../../layout/vaultNav/correction-vault-nav";
import CorrectionListingNav from "../../../../../layout/listingNav/correction-listing-nav";

import { useListingContext } from "../../../../../context/ListingContext";
import { json } from "stream/consumers";

const Page: NextPageWithLayout = () => {
  const router = useRouter();

  const { companyId, category, selected } = router.query;
  const query = selected && selected[0].toUpperCase() + selected.slice(1);
  const { listingdata, setActionState, action, setReloadAction, reload } =
    useListingContext();
  const [condition, setCondition] = useState(false);
  useEffect(() => {
    condition && setCondition(false);
    action;
    setTimeout(() => {
      setCondition(true);
      if (action) {
        reload ? setReloadAction(false) : setReloadAction(true);
      }
      setActionState(false);
    }, 3000);
  }, [listingdata]);

  return (
    <Box>
      {/* {JSON.stringify(action)} */}
      {condition ? (
        <Content
          tableData={listingdata?.filter(
            (d) => d.company.toLowerCase() == query?.toLowerCase()
          )}
        />
      ) : (
        <Box sx={{ display: "flex", justifyContent: "space-around", mt: 8 }}>
          <Box sx={{ display: "flex" }}>
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              sx={{ mr: 2 }}
            />
            <Box>
              <Skeleton width={"120px"} height={"20px"} animation="wave" />
              <Skeleton width={"120px"} height={"20px"} animation="wave" />
            </Box>
          </Box>
          <Skeleton width={"320px"} height={"20px"} animation="wave" />
        </Box>
      )}
    </Box>
  );
};
//We will get specific
Page.getLayout = function getLayout(page: ReactElement) {
  const router = useRouter();

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
        <ContentNav>{page}</ContentNav>
      </Box>
    </>
  );
};
export default Page;
