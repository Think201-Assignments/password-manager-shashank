import React, { useState } from "react";

import { Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  LinearProgress,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { Label, Visibility, VisibilityOff } from "@mui/icons-material";

export const SignInForm = (props: any) => {
  const { isValid, isSubmitting } = props;
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <Form noValidate>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ color: "#21212180", fontWeight: "700", size: "12px", pb: 2 }}
        >
          Email address
        </Typography>
        <Field
          sx={{
            mb: 2,
          }}
          // InputLabelProps={{ shrink: " false " }}
          component={TextField}
          type="email"
          name="email"
          // label="user@domain.com"
          placeholder="user@domain.com"
          fullWidth
          required
        />
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography
          sx={{ color: "#21212180", fontWeight: "700", size: "12px", pb: 2 }}
        >
          Password*
        </Typography>
        <Field
          sx={{
            mb: 2,
          }}
          // InputLabelProps={{ shrink: "false" }}
          component={TextField}
          name="password"
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
          // label="Password"
          placeholder="Password"
          fullWidth
          required
        />
        <Link
          href="/sign-in/forgot-password"
          style={{ textDecoration: "none" }}
        >
          <Typography
            align="right"
            sx={{ color: "#2121218A", fontSize: "12px", fontWeight: "600" }}
          >
            Forgot password
          </Typography>
        </Link>
      </Box>

      {/* {isSubmitting && <LinearProgress />} */}

      <Button
        // color={"#2a2f88"}
        sx={{
          mt: 2,
          // background: "#4DB6ACB2",
          width: { xs: "363px", sm: "463px", md: "463px", lg: "463px" },
          color: "#ffff",
          height: "49px",
          borderRadius: 0,
          fontWeight: "700",
          textTransform: "none",
          fontSize: "16px",
        }}
        type="submit"
        fullWidth
        variant="contained"
        color="secondary"
        disabled={!isValid || isSubmitting}
      >
        Sign in
      </Button>
    </Form>
  );
};
