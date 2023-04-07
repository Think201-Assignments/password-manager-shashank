import { NextPageWithLayout } from "@/pages/_app";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import router, { Router, useRouter } from "next/router";

import { ReactElement, useState } from "react";
import WelcomeHeader from "../../../../../layout/components/welcomepage/header/header";
import Welcomepagelayout from "../../../../../layout/welcomepage/welcomepagelayout";
import OtpInput from "react-otp-input";

const Page: NextPageWithLayout = () => {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const handleMouseDownConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box>
        <WelcomeHeader heading={"Reset password"} />

        <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "15px", mt: 2 }}>
          <Box
            sx={{
              width: "572px",
              height: "384px",
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
                    mt: 1,
                  }}
                >
                  Create new password
                </Typography>
                <TextField
                  sx={{ width: "463px" }}
                  id="outlined-basic"
                  variant="outlined"
                  size="small"
                  inputProps={{
                    style: {
                      height: "32px",
                    },
                    shrink: false,
                  }}
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    // <-- This is where the toggle button is added.
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Typography
                  sx={{
                    color: "#21212180",
                    fontSize: "12px",
                    fontWeight: "700",
                    mb: 1,
                    mt: 3,
                  }}
                >
                  Confirm new password
                </Typography>
                <TextField
                  sx={{ width: "463px" }}
                  id="outlined-basic"
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          onMouseDown={handleMouseDownConfirmPassword}
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  size="small"
                  inputProps={{
                    style: {
                      height: "32px",
                    },
                    shrink: false,
                  }}
                />
                <Button
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
