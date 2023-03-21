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
          height: "50px",
          width: "50px",

          backgroundColor: "white",

          ml: 1,
          mt: 1,
          display: "flex",
          borderRadius: "15%",
          diplay: "flex",
          pt: 1.3,

          justifyContent: "center",
        }}
      >
        {data.id}
        {/* {data[0].id} */}
      </Box>
    </>
  );
};

export default SideIcons;
