import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";
interface props {
  data: any | [];
  select?: any;
  selectData?: any;
}
const VaultOptions: React.FC<props> = ({ data, select, selectData }) => {
  const { text, link } = data;
  return (
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

          backgroundColor: select == text ? "rgba(60, 16, 83, 0.06)" : null,
        }}
        key={text}
        disablePadding
      >
        <ListItemButton
          onClick={() => selectData && selectData(text)}
          sx={{
            height: "16px",
            fontWeight: "500px",
            left: 0.1,
            py: 2,
            backgroundColor: select == text ? "rgba(60, 16, 83, 0.06)" : null,
          }}
        >
          <ListItemText primary={text} sx={{ pl: 2, color: "#000000DE" }} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default VaultOptions;
