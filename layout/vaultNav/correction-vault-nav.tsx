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
import VaultHeader from "../components/vaultNav/header";
import VaultOptions from "../components/vaultNav/options";
import { Router, useRouter } from "next/router";
interface props {
  selectData?: any;
  select?: any;
  Vaultheading?: any;
}

const CorrectionVaultNav: React.FC<props> = ({ Vaultheading }) => {
  const drawerWidth = 240;
  const route = useRouter();
  const { companyId, category } = route.query;
  const data = [
    { text: "All password", link: `/${companyId}/all-password` },
    { text: "Favourites", link: `/${companyId}/favourites` },
    { text: "Design", link: `/${companyId}/all-password` },
  ];
  const [select, selectData] = useState(category ? category : "");

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
              // heading
              heading={companyId}
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
            {data.map((data, index) => (
              <VaultOptions
                key={index}
                index={index}
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
            {[{ text: "user", link: "/think201/user-management" }].map(
              (data, index) => (
                <VaultOptions index={index} data={data} />
              )
            )}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default CorrectionVaultNav;
