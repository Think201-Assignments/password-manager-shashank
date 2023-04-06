import React from "react";
import { Formik } from "formik";

// import { Router } from "@mui/icons-material";
import Router, { useRouter, withRouter } from "next/router";
import { SignInForm } from "./sign-in-Form";
import { initialValues } from "./initialvalue";
import { validationSchema } from "./validation";

// interface props {
//   handleClose: Function;
// }

const SignInFormContainer = () => {
  const handleSubmit = (values: any, actions: any) => {
    console.log(values);
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => <SignInForm {...props} />}
      </Formik>
    </React.Fragment>
  );
};

export default SignInFormContainer;
