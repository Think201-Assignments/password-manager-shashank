import { Box, Container } from "@mui/material";
import React from "react";
interface props {
  data: any;
}
const SideIcons: React.FC<props> = ({ data }) => {
  return (
    <>
      <Box
        sx={{
          height: "48px",
          width: "48px",
          background: `url('logo.png')`,

          backgroundColor: "white",

          boxShadow: " 0px 4px 34px 0px #00000073",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",

          borderRadius: "15%",
          diplay: "flex",

          justifyContent: "center",
        }}
      >
        {/* {data.id} */}
      </Box>
    </>
  );
};

export default SideIcons;
