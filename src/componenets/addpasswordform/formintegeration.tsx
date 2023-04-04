import React from "react";
import { Formik } from "formik";

import { SimpleFormBridged } from "./simpleForm";
import { initialValues } from "./initialvalues";
import { validationSchema } from "./validation.js";
import { handleSubmit } from "./handleSubmit";
import { allpassword, tableData } from "../dummydata/containerData";
import { useListingContext } from "../../../context/ListingContext";
// import { Router } from "@mui/icons-material";
import Router, { useRouter, withRouter } from "next/router";

interface props {
  handleClose: Function;
}

const SimpleFormContainer: React.FC<props> = ({ handleClose }) => {
  const { addProduct, addPassword, setActionState } = useListingContext();
  const router = useRouter();
  const { companyId, category } = router.query;
  const handleSubmit = (values: any, actions: any) => {
    console.log(values);
    tableData.push(values);
    allpassword.unshift({ text: values.company, color: "" });
    // addPassword({ text: values.company, color: "" });
    console.log(tableData);
    console.log(allpassword);
    addProduct(values);
    setActionState(true);
    router.push({
      pathname: `/${companyId}/${category}/${values.company.toLowerCase()}`,
    });

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
