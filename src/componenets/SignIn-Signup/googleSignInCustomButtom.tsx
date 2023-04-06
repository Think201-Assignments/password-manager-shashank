import { Box, Button } from "@mui/material";

import React from "react";
interface props {
  children: React.ReactNode;
}
const GoogleSignInSignUpCustomButtom: React.FC<props> = ({ children }) => {
  return (
    <Button
      sx={{
        width: { xs: "363px", sm: "463px", md: "463px", lg: "463px" },
        height: "46px",
        mt: 4,
        color: "#212121",
        border: "solid 1px #E0E0E0",
      }}
      variant="outlined"
    >
      <Box
        sx={{
          backgroundRepeat: "no-repeat",

          background: `url('google.png')`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40px",
          width: "40px",
        }}
      ></Box>
      {children}
    </Button>
  );
};

export default GoogleSignInSignUpCustomButtom;
