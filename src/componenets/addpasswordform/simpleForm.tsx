import React from "react";

import { Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import { Button, LinearProgress } from "@mui/material";
import Link from "next/link";

export const SimpleFormBridged = (props: any) => {
  const { isValid, isSubmitting } = props;

  return (
    <Form noValidate>
      <Field
        sx={{
          mt: 1,
          mb: 1,
          "& fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          },
          //   borderBottom: "solid 1px #EFEFEF",
        }}
        component={TextField}
        name="company"
        label="Organisation Name"
        fullWidth
        required
      />
      <Field
        sx={{
          mb: 2,
          "& fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          },
        }}
        component={TextField}
        type="email"
        name="login"
        label="login"
        fullWidth
        required
      />
      <Field
        sx={{
          mb: 2,
          "& fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          },
        }}
        component={TextField}
        type="password"
        name="password"
        label="Password"
        fullWidth
        required
      />
      <Field
        sx={{
          mb: 2,
          "& fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          },
        }}
        component={TextField}
        type="token"
        name="token"
        label="token (Optional)"
        fullWidth
      />
      <Field
        sx={{
          mb: 2,

          "& fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          },
        }}
        component={TextField}
        type="link"
        name="link"
        label="link"
        fullWidth
        required
      />
      <Field
        sx={{
          mb: 2,

          "& fieldset": {
            borderTop: "none",
            borderLeft: "none",
            borderRight: "none",
          },
        }}
        component={TextField}
        type="department"
        name="department"
        label="department"
        fullWidth
        required
      />

      {isSubmitting && <LinearProgress />}

      <Button
        // color={"#2a2f88"}
        sx={{ mt: 2 }}
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={!isValid || isSubmitting}
      >
        Submit
      </Button>
    </Form>
  );
};
