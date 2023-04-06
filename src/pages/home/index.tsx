import { Box, Typography } from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import DrawerAppBar from "../../../layout/homepage/navbar";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          background: `url('homepage.png')`,
          backgroundColor: "#4DB6AC14",
          height: "100vh",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          // backgroundSize:"",
        }}
      >
        <DrawerAppBar></DrawerAppBar>
        <Box sx={{ height: "80px", pt: "10px" }}>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "800", color: "#1B847A" }}
          >
            Helix.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
