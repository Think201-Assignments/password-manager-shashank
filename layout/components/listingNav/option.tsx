import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
interface props {
  select: any;
  text: any;
  index: any;
  stateSetter: Function;
  match: any;
}

const Options: React.FC<props> = ({
  select,
  text,
  index,
  stateSetter,
  match,
}) => {
  return (
    <ListItem
      key={text}
      sx={{
        backgroundColor: select == text ? "rgba(60, 16, 83, 0.06)" : null,
      }}
      // key={index}
      disablePadding
    >
      <ListItemButton key={text} onClick={() => stateSetter(text)}>
        <ListItemIcon key={text}>
          {" "}
          <Avatar key={text} sx={{ bgcolor: match.color }}>
            {text.charAt(0)}
          </Avatar>
        </ListItemIcon>
        <ListItemText sx={{ color: "#000000DE" }} primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default Options;