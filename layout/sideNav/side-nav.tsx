import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { CollectionsBookmarkRounded } from "@mui/icons-material";
import SideIcons from "../components/sideNav/Icon";
import Link from "next/link";
import VaultOptions from "../components/vaultNav/options";
import { List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface props {
  children?: React.ReactNode;
}
const SideNav: React.FC<props> = ({ children }) => {
  const list = [
    { name: "think201", id: "1", logo: "<AcUnitIcon />" },
    {
      name: "xyz",
      id: "2",
      logo: "<AcUnitIcon />",
    },
  ];

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          height: "100vh",
          width: "90px",
          backgroundColor: "secondary.main",
          display: "flex",
          justifyContent: "center",
          boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontWeight: "800",
              fontSize: "17px",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              mt: 2,
            }}
          >
            Helix.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", my: 1 }}>
            <IconButton sx={{ height: "48px", width: "48px" }}>S</IconButton>
          </Box>

          <List sx={{ pt: 0 }}>
            {list.map((data, index) => (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Link style={{ textDecoration: "none" }} href={`/${data.name}`}>
                  <Button
                    sx={{
                      height: "48px",
                      width: "48px",
                      mt: 3,
                    }}
                  >
                    <SideIcons data={data} />
                  </Button>
                </Link>
              </Box>
            ))}
          </List>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <IconButton
              sx={{ height: "48px", width: "48px", backgroundColor: "#c1e5e2" }}
            >
              <AddIcon />
            </IconButton>
          </Box>
        </Stack>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default SideNav;
