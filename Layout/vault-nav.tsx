import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";
import React, { useState } from "react";
import VaultHeader from "./UI-Components/vaultNav/header";
import VaultOptions from "./UI-Components/vaultNav/options";
interface props {
  selectData?: any;
  select?: any;
}

const VaultNav: React.FC<props> = ({ selectData, select }) => {
  const drawerWidth = 240;

  const data = [
    { text: "All password", link: "/all-password" },
    { text: "Favourites", link: "/favourites" },
    { text: "Design", link: "/all-password" },
  ];

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            pt: 4,
            height: "9vh",
          }}
        >
          <Stack>
            <VaultHeader
              sx={{ display: "flex", fontSize: "20px", fontWeight: "700" }}
              heading={"Think201 Vault"}
            />
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                pl: 4,
                color: "#000000A8",
              }}
            >
              21 Members
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "260px",
            height: "91vh",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
          }}
        >
          <List sx={{ pt: 9 }}>
            {data.map((data) => (
              <VaultOptions
                data={data}
                select={select}
                selectData={selectData}
              />
            ))}
          </List>
          <Box sx={{ pl: 4 }}>
            <Typography
              sx={{
                mt: 3,
                fontSize: "10px",
                fontWeight: "700",
                color: "#00000054",
              }}
            >
              USER MANAGEMENT
            </Typography>
          </Box>
          <List>
            {[{ text: "user", link: "/user-management" }].map((data) => (
              <VaultOptions data={data} />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default VaultNav;
