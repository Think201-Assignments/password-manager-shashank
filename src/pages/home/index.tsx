import { Box, Button, Typography } from "@mui/material";
import { width } from "@mui/system";
import { Router, useRouter } from "next/router";
import React from "react";
import DrawerAppBar from "../../../layout/homepage/navbar";

const Home = () => {
  const router = useRouter();
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
        <Box
          sx={{
            height: "80px",
            pt: "10px",

            mt: 4,
            ml: { sm: 10, md: 16 },
          }}
        >
          <Typography
            sx={{
              width: "645px",
              fontSize: "64px",
              fontWeight: "700",
              lineHeight: "70.4px",
              color: "#212121",
            }}
          >
            The ultimate password manager for organisations
          </Typography>
          <Typography
            sx={{
              mt: 4,
              width: "600px",
              fontWeight: "400",
              fontSize: "19px",
              lineHeight: "30px",
            }}
          >
            Helix provides an advantage of effective teamwork with corporate
            passwords in a totally safe environment. Employees can quickly
            access all their passwords, while the rights and actions are closely
            supervised and managed by local system administrators.
          </Typography>
          <Typography
            sx={{
              mt: 2,
              width: "600px",
              fontWeight: "400",
              fontSize: "19px",
              lineHeight: "30px",
            }}
          >
            The conceptory was non-sentient software, as ancient as Konishi
            &nbsp; polis itself.
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Button
              sx={{
                textTransform: "none",
                color: "white",
                backgroundColor: "#4DB6AC",
                borderRadius: "0px",
                height: "48px",
                width: "202px",
                // padding: "12px, 24px, 12px, 24px",
                fontWeight: "700",
                fontSize: "16px",
                px: "12px",
                // py: "14px",
              }}
              onClick={() => router.push("/sign-up")}
            >
              Create an account
            </Button>
            &nbsp;&nbsp;&nbsp;
            <Button
              sx={{
                height: "48px",
                width: "144px",
                fontWeight: "700",
                fontSize: "16px",
                textTransform: "none",
                color: "white",
                backgroundColor: "#212121",
                borderRadius: "0px",
              }}
              // onClick={() => router.push()}
            >
              Learn more
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
