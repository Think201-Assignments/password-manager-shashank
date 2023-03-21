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
            {data.map(({ text, link }, index) => (
              <Link
                href={`${link}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItem
                  sx={{
                    height: "16px",
                    fontWeight: "500px",
                    py: 2,

                    backgroundColor:
                      select == text ? "rgba(60, 16, 83, 0.06)" : null,
                  }}
                  key={text}
                  disablePadding
                >
                  <ListItemButton
                    onClick={() => selectData(text)}
                    sx={{
                      height: "16px",
                      fontWeight: "500px",
                      left: 0.1,
                      py: 2,
                      backgroundColor:
                        select == text ? "rgba(60, 16, 83, 0.06)" : null,
                    }}
                  >
                    <ListItemText
                      primary={text}
                      sx={{ pl: 2, color: "#000000DE" }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
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
            {["user"].map((text, index) => (
              <Link
                href={`/user-management`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <ListItem
                  sx={{
                    height: "16px",
                    fontWeight: "500px",
                    py: 2,
                    textDecoration: "none",
                  }}
                  key={text}
                  disablePadding
                >
                  <ListItemButton
                    sx={{ height: "16px", fontWeight: "500px", py: 2 }}
                  >
                    <ListItemText primary={text} sx={{ pl: 2 }} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default VaultNav;
