import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const VaultHeader = ({ heading }: any) => {
  return (
    <Typography
      sx={{
        fontSize: "21px",
        fontWeight: 900,
        pl: 4,
      }}
    >
      {heading}
    </Typography>
  );
};

export default VaultHeader;
