import { NextPageWithLayout } from "@/pages/_app";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import router, { Router, useRouter } from "next/router";

import { ReactElement } from "react";
import WelcomeHeader from "../../../../layout/components/welcomepage/header/header";
import Welcomepagelayout from "../../../../layout/welcomepage/welcomepagelayout";

const Page: NextPageWithLayout = () => {
  const route = useRouter();
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <WelcomeHeader
          heading={"Forgot password"}
          subheading={"Enter your email address to reset your password"}
        />

        <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "15px", mt: 2 }}>
          <Box
            sx={{
              //   display: "flex",
              //   justifyContent: "center",
              width: "572px",
              height: "248px",
            }}
          >
            <Box sx={{ pt: 4.5, display: "flex", justifyContent: "center" }}>
              <Stack>
                <Typography
                  sx={{
                    color: "#21212180",
                    fontSize: "12px",
                    fontWeight: "700",
                    mb: 1,
                  }}
                >
                  Email address*
                </Typography>
                <TextField
                  sx={{ width: "463px" }}
                  id="outlined-basic"
                  placeholder="John@domain.com"
                  variant="outlined"
                  size="small"
                  inputProps={{
                    style: {
                      height: "32px",
                      // borderRadius: "0px",
                    },
                    shrink: false,
                  }}
                />
                <Button
                  onClick={() =>
                    route.push("/sign-in/forgot-password/reset-password")
                  }
                  sx={{
                    mt: 5,
                    height: "49px",
                    width: "463px",
                    backgroundColor: "#4DB6AC",
                    color: "#FFFFFF",
                  }}
                >
                  Continue
                </Button>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
Page.getLayout = function getLayout(page: ReactElement) {
  return <Welcomepagelayout>{page}</Welcomepagelayout>;
};
export default Page;
