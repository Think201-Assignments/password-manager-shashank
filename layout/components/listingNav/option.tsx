import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const route = useRouter();
  const a = route.pathname;
  return (
    <ListItem
      key={text}
      sx={{
        backgroundColor: select == text ? "rgba(60, 16, 83, 0.06)" : null,
      }}
      // key={index}
      disablePadding
    >
      {/* <Link href={`${baselink}/${text}`}> */}
      <ListItemButton key={text} onClick={() => stateSetter(text)}>
        <ListItemIcon key={text}>
          {" "}
          <Avatar key={text} sx={{ bgcolor: match.color }}>
            {text.charAt(0)}
          </Avatar>
        </ListItemIcon>
        <ListItemText sx={{ color: "#000000DE" }} primary={text} />
      </ListItemButton>
      {/* </Link> */}
    </ListItem>
  );
};

export default Options;
