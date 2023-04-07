import { Box, Typography } from "@mui/material";
import React from "react";
interface props {
  heading: any;
  subheading?: any;
}

const WelcomeHeader: React.FC<props> = ({ heading, subheading }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "700",
          fontSize: "36px",
          lineHeight: "39.6px",
          // alignItems: "center",
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        {heading}
      </Typography>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "14px",
          lineHeight: "17.07px",
          display: "flex",
          justifyContent: "center",
          color: "#999999",
          mt: 2,
        }}
      >
        <i>{subheading}</i>
      </Typography>
    </Box>
  );
};

export default WelcomeHeader;
