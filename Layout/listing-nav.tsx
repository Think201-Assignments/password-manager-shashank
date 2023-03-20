import { AccountCircle, Password } from "@mui/icons-material";

import {
  Avatar,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Yellowtail } from "next/font/google";
import React, { useEffect, useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
// import InputAdornment from "@mui/material/InputAdornment";

interface props {
  children?: React.ReactNode;
  data?: any;
  selectspecific: any;
}
const design = ["Figma", "Adobe design suite", "Storyblocks"];
const allpassword = [
  "Google",
  "Milan",
  "Figma",
  "Adobe design suite",
  "Storyblocks",
];

const ListingNav: React.FC<props> = ({ children, data, selectspecific }) => {
  const [select, setSelect] = useState("");

  const [query, setQuery] = useState("");
  function randomColor() {
    let hex = Math.floor(Math.random() * 0xffffff);
    let color = "#" + hex.toString(16);

    return color;
  }
  const match = [
    { text: "Google", color: "green" },
    { text: "Milan", color: "purple" },
    { text: "Figma", color: "#EDD869" },
    { text: "Adobe design suite", color: "red" },
    { text: "Storyblocks", color: "" },
  ];
  const stateSetter = (data: any) => {
    setSelect(data);
    selectspecific(data);
  };
  useEffect(() => {
    data == "All password" ? setSelect(allpassword[0]) : setSelect(design[0]);
    query;
  }, []);
  return (
    <Box sx={{ display: "flex" }}>
      {/* <Box>{children}</Box> */}
      <Box
        sx={{
          width: "260px",
          height: "100vh",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12);",
        }}
      >
        <TextField
          // variant="standard"
          sx={{
            "& fieldset": { border: "none" },
            height: "61px",
            width: "260px",
            borderBottom: "solid 1px #EFEFEF",
          }}
          placeholder={"Search in design"}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {" "}
                <SearchSharpIcon sx={{ color: "#CCCCCC" }} />
              </InputAdornment>
            ),
          }}
          // sx={{
          //   borderRadius: "0",
          //   border: 0,
          //   border: "none",

          //   // py: 3,
          //   // height: "310px",

          //   width: "280px",
          // }}
          onChange={(event: any) => setQuery(event.target.value)}
        />
        <Box sx={{ mt: 4, pl: "25px" }}>
          <Stack>
            <Typography
              sx={{
                fontSize: "19px",
                fontWeight: 700,
              }}
            >
              {data}
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
              15 Members
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ pl: 4 }}>
          <Typography
            sx={{
              mt: 3,
              fontSize: "14px",
              fontWeight: "500",
              color: "#00000054",
            }}
          >
            {data === "All password" ? "All Password" : data + " " + "Password"}
          </Typography>
        </Box>
        <List>
          {(data == "All password" ? allpassword : design)
            .filter((data) => {
              if (query === "") {
                return data;
              } else if (data.includes(query)) {
                return data;
              }
            })
            .map((text, index) => (
              <ListItem
                sx={{
                  backgroundColor:
                    select == text ? "rgba(60, 16, 83, 0.06)" : null,
                }}
                key={text}
                disablePadding
              >
                <ListItemButton onClick={() => stateSetter(text)}>
                  <ListItemIcon>
                    {" "}
                    {/* <Avatar sx={{ bgcolor: randomColor }}>
                      {text.charAt(0)}
                    </Avatar> */}
                    <Avatar sx={{ bgcolor: match[index].color }}>
                      {text.charAt(0)}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
      </Box>
    </Box>
  );
};

export default ListingNav;
