import React from "react";
import { Formik } from "formik";

import { SimpleFormBridged } from "./simpleForm";
import { initialValues } from "./initialvalues";
import { validationSchema } from "./validation.js";
import { handleSubmit } from "./handleSubmit";
import { tableData } from "@/pages/containerData";

interface props {
  handleClose: Function;
}

const SimpleFormContainer: React.FC<props> = ({ handleClose }) => {
  const handleSubmit = (values: any, actions: any) => {
    console.log(values);
    tableData.push(values);
    console.log(tableData);

    handleClose();
  };
  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(props) => <SimpleFormBridged {...props} />}
      </Formik>
    </React.Fragment>
  );
};

export default SimpleFormContainer;
