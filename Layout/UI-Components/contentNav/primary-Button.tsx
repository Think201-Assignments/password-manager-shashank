import { Button } from "@mui/material";
import React from "react";
interface props {
  children: React.ReactNode;
  OnClickEvent: Function;
  sx: any;
}

const PrimaryButton: React.FC<props> = ({ children, sx, OnClickEvent }) => {
  return (
    <Button
      sx={{
        fontSize: "13px",
        width: "130px",
        height: "32px",
        borderRadius: "16px",
        background: "linear-gradient(90deg, #4E54C8 0%, #8F94FB 100%)",
        ...sx,
      }}
      onClick={() => OnClickEvent()}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
