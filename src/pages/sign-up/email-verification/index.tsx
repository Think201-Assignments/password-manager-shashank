import { NextPageWithLayout } from "@/pages/_app";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { ReactElement, useState } from "react";
import CustomTypographyListView from "../../../../layout/components/signin/customTypographyListView";
import SigninLayout from "../../../../layout/signin/signin";

import OtpInput from "react-otp-input";

const Page: NextPageWithLayout = () => {
  const [otp, setOtp] = useState("");
  return (
    <Box>
      {" "}
      <Typography
        sx={{
          fontWeight: "400",
          lineHeight: "30px",
          size: "13px",
          color: "#999999",
          mb: 1,
          mt: 2,

          pb: 0,
        }}
      >
        <i>Please enter the 6 digit code sent user@domain.com</i>
      </Typography>
      {/* <SignUpFormContainer /> */}
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={6}
        renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          height: "48px",
          width: "53px",
          padding: "12px",
          border: "solid 1px #E0E0E0",
          borderRadius: "6px",
          fontSize: "18px",
          fontWeight: "700",
        }}
      />
      <Box
        sx={{
          color: "#2121218A",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          pt: 1,
        }}
      >
        Didn&apos;t receive code?&nbsp;
        <Link href="sign-in" style={{ textDecoration: "none" }}>
          <Typography
            sx={{ color: "#4DB6AC", fontSize: "12px", fontWeight: "600" }}
          >
            Resend
          </Typography>
        </Link>
      </Box>
      <Link href="/welcome" style={{ textDecoration: "none" }}>
        <Button
          sx={{
            mt: 4,
            height: "49px",
            width: "398px",
            textTransform: "none",
            borderRadius: "0px",
            fontSize: "16px",
            fontWeight: "700",
            color: "#fff",
            lineHeight: "19.5px",
          }}
          color="secondary"
          variant="contained"
        >
          Verify
        </Button>
      </Link>
    </Box>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  const Display = (
    <>
      {" "}
      <CustomTypographyListView sx={{ mt: 0 }}>
        Simple access to multiple accounts
      </CustomTypographyListView>
      <CustomTypographyListView>
        Store more than just passwords
      </CustomTypographyListView>
      <CustomTypographyListView>
        Easily change your passwords
      </CustomTypographyListView>
      <CustomTypographyListView>
        Share passwords securely
      </CustomTypographyListView>
    </>
  );
  return (
    <>
      <SigninLayout Display={Display} heading={"Verify your email"}>
        {page}
      </SigninLayout>
    </>
  );
};
export default Page;
