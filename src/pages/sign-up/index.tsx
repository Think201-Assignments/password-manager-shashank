import GoogleSignInSignUpCustomButtom from "@/componenets/SignIn-Signup/googleSignInCustomButtom";
import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React, { ReactElement } from "react";
import CustomTypographyListView from "../../../layout/components/signin/customTypographyListView";
import SigninLayout from "../../../layout/signin/signin";
import { NextPageWithLayout } from "../_app";
import SignUpFormContainer from "./inc/form/sign-up-Form-Integeration";

const Page: NextPageWithLayout = () => {
  return (
    <Box>
      {" "}
      <GoogleSignInSignUpCustomButtom>
        {" "}
        Continue with google
      </GoogleSignInSignUpCustomButtom>
      <Divider>
        <Typography
          sx={{
            color: "#3333338A",
            fontWeight: "400",
            fontSize: "13px",
            my: 3,
          }}
        >
          OR
        </Typography>
      </Divider>
      <Typography
        sx={{
          fontWeight: "400",
          lineHeight: "30px",
          size: "13px",
          color: "#999999",

          pb: 0,
        }}
      >
        <i>Use your official email address for registration</i>
      </Typography>
      <SignUpFormContainer />
      <Box sx={{ dispay: "flex", justifyContent: "center" }}>
        {/* <Box></Box> */}
        <Typography
          //   variant="body1"
          sx={{ color: "#2121218A", fontSize: "12px", fontWeight: "600" }}
        >
          Have an account?
        </Typography>{" "}
        <Link href="sign-in" style={{ textDecoration: "none" }}>
          <Typography
            //   variant="body1"
            sx={{ color: "#4DB6AC", fontSize: "12px", fontWeight: "600" }}
          >
            Sign in
          </Typography>
        </Link>
      </Box>
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
      <SigninLayout
        Display={Display}
        heading={"Create an account"}
        subHeading={"Please select an option to continue to your account"}
      >
        {page}
      </SigninLayout>
    </>
  );
};
export default Page;
