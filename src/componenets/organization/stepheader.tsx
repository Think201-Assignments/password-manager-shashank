import { Box, Typography } from "@mui/material";
import React from "react";

interface props {
  heading: any;
  subheading: any;
}

const StepHeader: React.FC<props> = ({ heading, subheading }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "25px",
          fontWeight: "700",
          width: "734px",
          mb: 0.5,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "400",
          width: "575px",
          lineHeight: "16px",
          color: "#999999",
        }}
      >
        <i>{subheading}</i>
      </Typography>
    </Box>
  );
};

export default StepHeader;
