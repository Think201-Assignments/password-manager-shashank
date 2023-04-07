import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import img from "./Signin.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

import DoneIcon from "@mui/icons-material/Done";
import CustomTypographyListView from "../components/signin/customTypographyListView";
interface props {
  children: React.ReactNode;
  Display?: React.ReactNode;
  heading?: any;
  subHeading?: any;
  sigin?: any;
}
const SigninLayout: React.FC<props> = ({
  children,
  Display,
  heading,
  subHeading,
  sigin,
}) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",

        marginTop: 0,
      }}
    >
      <Grid container>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={5.5}
          sx={{
            backgroundRepeat: "no-repeat",

            background: sigin ? `url('signin.png')` : `url('Signin.png')`,

            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              height: "100vh",
              backgroundColor: "#00302BDE",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Box>
              <Stack>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "800",
                      height: "17px",
                      fontSize: "24px",
                      color: "#fff",
                      pt: 6,
                      ml: "27vh",
                    }}
                  >
                    {" "}
                    Helix.
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "800",
                      height: "17px",
                      fontSize: "24px",
                      color: "#fff",
                      pt: 6,
                      //   ml: 10,
                    }}
                  ></Typography>
                </Box>
                <Box
                  sx={{
                    mt: "290px",
                    display: "flex",
                    justifyContent: "center",
                    // mr: 9.5,
                  }}
                >
                  <Stack>
                    {!sigin && (
                      <FormatQuoteIcon
                        sx={{ height: "28px", width: "28px", color: "white" }}
                      />
                    )}
                    <Typography
                      sx={{
                        fontWeight: "700",
                        fontSize: "24px",
                        color: "#fff",
                        lineHeight: "32px",
                        width: "376px",
                        mb: 4,
                        pl: 1,
                      }}
                      variant="h1"
                    >
                      <i>
                        {sigin
                          ? "Welcome back to Helix."
                          : " Secure Your Digital Life with Ease: The Ultimate Password Manager"}
                      </i>
                    </Typography>
                    {Display}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>{" "}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ height: "100vh" }}
          sm={12}
          md={12}
          lg={6.5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              sx={{ fontSize: "36px", fontWeight: "700" }}
              variant="h5"
            >
              {heading}
            </Typography>
            <Typography
              sx={{
                color: "#CECECE",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "30px",
              }}
              variant="body1"
            >
              {subHeading}
            </Typography>
            {children}
          </Box>
        </Grid>
      </Grid>
    </Box>
    // </Container>
  );
};

export default SigninLayout;
