import GoogleSignInSignUpCustomButtom from "@/componenets/SignIn-Signup/googleSignInCustomButtom";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Italiana } from "next/font/google";
import Link from "next/link";
import React, { ReactElement } from "react";
import CustomTypographyListView from "../../../layout/components/signin/customTypographyListView";
import SigninLayout from "../../../layout/signin/signin";
import { NextPageWithLayout } from "../_app";
import SignInFormContainer from "./inc/sign-in-Form-Integeration";

const Page: NextPageWithLayout = () => {
  return (
    <Box>
      {/* {"margin top is already there in Custom Button"} */}
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

      <SignInFormContainer />
      <Box
        sx={{
          color: "#2121218A",
          fontSize: "12px",
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          pt: 3,
        }}
      >
        {/* <Box></Box> */}
        Not a member &nbsp;
        <Link href="sign-up" style={{ textDecoration: "none" }}>
          <Typography
            //   variant="body1"
            sx={{ color: "#4DB6AC", fontSize: "12px", fontWeight: "600" }}
          >
            Sign up
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
      <Typography sx={{ color: "#fff", fontSize: "16px", fontWeight: "500" }}>
        Sign in to your account
      </Typography>
    </>
  );
  return (
    <>
      <SigninLayout
        sigin={true}
        Display={Display}
        heading={"Sign in to your account"}
        subHeading={"Please select an option to continue to your account"}
      >
        {page}
      </SigninLayout>
    </>
  );
};
export default Page;
