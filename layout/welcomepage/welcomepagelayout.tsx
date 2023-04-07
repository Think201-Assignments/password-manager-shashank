import { Box, Typography } from "@mui/material";
import React from "react";
interface props {
  children: React.ReactNode;
}

const Welcomepagelayout: React.FC<props> = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#4DB6AC14", height: "100vh", width: "100vw" }}>
      <Box>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "800",
            height: "17px",
            fontSize: "24px",
            color: "#1B847A",
            pt: 6,
            ml: "27vh",
            mb: 6,
          }}
        >
          {" "}
          Helix.
        </Typography>
      </Box>
      {children}
    </Box>
  );
};

export default Welcomepagelayout;
