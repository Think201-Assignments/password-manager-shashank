import { Box, IconButton, Stack } from "@mui/material";
import { display } from "@mui/system";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { CollectionsBookmarkRounded } from "@mui/icons-material";
import SideIcons from "../components/sideNav/Icon";
import Link from "next/link";

interface props {
  children?: React.ReactNode;
}
const SideNav: React.FC<props> = ({ children }) => {
  const List: any | [] = [
    {
      id: 1,
      logo: <AcUnitIcon />,
    },
    {
      id: 2,
      logo: <AcUnitIcon />,
    },
  ];

  return (
    <Box sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={{
          height: "100vh",
          width: "90px",
          backgroundColor: "#2a2f88",
          display: "flex",
          justifyContent: "center",
          boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.12)",
        }}
      >
        <Stack>
          {List.map((List: any) => {
            <SideIcons data={List} />;
          })}
          <Link style={{ textDecoration: "none" }} href="/think201">
            <IconButton>
              <SideIcons data={List[0]} />
            </IconButton>
          </Link>
          <Link style={{ textDecoration: "none" }} href="/xyz">
            <IconButton>
              <SideIcons data={List[1]} />
            </IconButton>
          </Link>
        </Stack>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default SideNav;
