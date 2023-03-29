import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import Link from "next/link";
import React from "react";
interface props {
  index?: any;
  data: any | [];
  select?: any;
  selectData?: any;
}
const VaultOptions: React.FC<props> = ({ data, select, selectData, index }) => {
  const { text, link } = data;
  return (
    <Link
      key={index}
      href={`${link}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <ListItem
        key={index}
        sx={{
          height: "16px",
          fontWeight: "500px",
          py: 2,

          backgroundColor: select == text ? "rgba(60, 16, 83, 0.06)" : null,
        }}
        disablePadding
      >
        <ListItemButton
          onClick={() => selectData && selectData(text)}
          key={index}
          sx={{
            height: "16px",
            fontWeight: "500px",
            left: 0.1,
            py: 2,
            backgroundColor: select == text ? "rgba(60, 16, 83, 0.06)" : null,
          }}
        >
          <ListItemText
            key={index}
            primary={text}
            sx={{ pl: 2, color: "#000000DE" }}
          />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default VaultOptions;
