import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Welcomepagelayout from "../../../layout/welcomepage/welcomepagelayout";

const Welcome = () => {
  return (
    <Welcomepagelayout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
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
            Welcome to Helix.!
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
            <i>we just need some basic info to setup your account.</i>
          </Typography>
          <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: "15px", mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "572px",
                height: "216px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#212121",
                    fontWeight: "600",
                    fontSize: "18px",
                    mt: 5,
                  }}
                >
                  Select your preference
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    sx={{
                      backgroundColor: "#4DB6AC",
                      color: "#FFFFFF",
                      textTransform: "none",
                      height: "49px",
                      width: "180px",
                      borderRadius: "0px",
                      fontWeight: "600",
                    }}
                  >
                    For Organization
                  </Button>
                  &nbsp;&nbsp;&nbsp;
                  <Button
                    sx={{
                      fontWeight: "600",
                      backgroundColor: "#212121E5",
                      color: "#FFFFFF",
                      textTransform: "none",
                      height: "49px",
                      width: "180px",
                      borderRadius: "0px",
                    }}
                  >
                    For Personal
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Welcomepagelayout>
  );
};

export default Welcome;
