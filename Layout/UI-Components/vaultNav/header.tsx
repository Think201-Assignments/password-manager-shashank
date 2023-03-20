import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const VaultHeader = ({ heading }: any) => {
  return (
    <Typography
      sx={{
        fontSize: "19px",
        fontWeight: 700,
      }}
    >
      {heading}
    </Typography>
  );
};

export default VaultHeader;
