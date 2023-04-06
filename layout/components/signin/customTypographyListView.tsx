import { Box, Typography } from "@mui/material";
import React from "react";
import DoneIcon from "@mui/icons-material/Done";

interface props {
  children: React.ReactNode;
  sx?: any;
}
const CustomTypographyListView: React.FC<props> = ({ children, sx }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <DoneIcon sx={{ pt: 1, color: "#fff" }} />
      <Typography
        sx={{
          lineHeight: "38px",
          fontSize: "16px",
          color: "#FFFFFFA8",
          ...sx,
        }}
        variant="body1"
      >
        &nbsp;{children}
        {/* Simple access to multiple accounts */}
      </Typography>
    </Box>
  );
};

export default CustomTypographyListView;
