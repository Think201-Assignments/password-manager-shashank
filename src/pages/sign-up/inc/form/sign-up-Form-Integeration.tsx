import React from "react";
import { Formik } from "formik";

// import { Router } from "@mui/icons-material";
import Router, { useRouter, withRouter } from "next/router";
import { SignUpForm } from "./sign-up-Form";
import { initialValues } from "./initialvalue";
import { validationSchema } from "./validation";

// interface props {
//   handleClose: Function;
// }700

const SignUpFormContainer = () => {
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
        {(props) => <SignUpForm {...props} />}
      </Formik>
    </React.Fragment>
  );
};

export default SignUpFormContainer;
