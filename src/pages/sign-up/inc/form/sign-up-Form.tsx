import React from "react";

import { Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Box, Button, LinearProgress, Typography } from "@mui/material";
import Link from "next/link";
import { Label } from "@mui/icons-material";

export const SignUpForm = (props: any) => {
  const { isValid, isSubmitting } = props;

  return (
    <Form noValidate>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ color: "#21212180", fontWeight: "700", size: "12px", pb: 2 }}
        >
          Full Name
        </Typography>
        <Field
          sx={{
            mb: 2,
            notched: false,
            lable: null,
          }}
          InputLabelProps={{ shrink: false }}
          component={TextField}
          type=""
          name="fullname"
          // label="eg.Jhon"
          placeholder="eg.Jhon"
          fullWidth
          required
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ color: "#21212180", fontWeight: "700", size: "12px", pb: 2 }}
        >
          Email address
        </Typography>
        <Field
          sx={{
            mb: 2,
          }}
          component={TextField}
          InputLabelProps={{ shrink: false }}
          type="email"
          name="email"
          // label="user@domain.com"
          placeholder="user@domain.com"
          fullWidth
          required
        />
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography
          sx={{ color: "#21212180", fontWeight: "700", size: "12px", pb: 2 }}
        >
          Password*
        </Typography>
        <Field
          sx={{
            mb: 2,
          }}
          InputLabelProps={{ shrink: false }}
          component={TextField}
          type="password"
          name="password"
          // label="Password"
          placeholder="password"
          fullWidth
          required
        />
      </Box>

      {/* {isSubmitting && <LinearProgress />} */}

      <Button
        // color={"#2a2f88"}
        sx={{
          mt: 2,
          background: "#4DB6ACB2",
          width: { xs: "363px", sm: "463px", md: "463px", lg: "463px" },
          height: "49px",
          borderRadius: 0,
        }}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid || isSubmitting}
      >
        Create an account
      </Button>
    </Form>
  );
};
