import {
  Hidden,
  InputAdornment,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import { Box } from "@mui/system";
import { Yellowtail } from "next/font/google";
import React, { useEffect, useState } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

import Options from "../components/listingNav/option";
import { motion } from "framer-motion";
import { allpassword, design } from "@/componenets/dummydata/containerData";
import { useRouter } from "next/router";
import Link from "next/link";

// import InputAdornment from "@mui/material/InputAdornment";

interface props {
  children?: React.ReactNode;
  data?: any;
  selectspecific: any;

  // baselink: any;
}

const ListingNav: React.FC<props> = ({
  children,
  data,
  selectspecific,

  // baselink,
}) => {
  const router = useRouter();
  const { companyId, category } = router.query;
  const [select, setSelect] = useState("");

  const [query, setQuery] = useState("");

  const stateSetter = (data: any) => {
    setSelect(data);
    selectspecific(data);
  };
  // useEffect(() => {
  //   data === "All password"
  //     ? setSelect(allpassword[0].text)
  //     : setSelect(design[0].text);
  //   query;
  // }, []);
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "260px",
          height: "100vh",

          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12);",
        }}
      >
        <TextField
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
              {data === "all-password"
                ? "All Password"
                : data + " " + "Password"}
            </Typography>
            <Typography
              sx={{ fontSize: "13px", fontWeight: "500", color: "#000000A8" }}
            >
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
            {data === "all-password" ? "All Password" : data + " " + "Password"}
          </Typography>
        </Box>
        <List
          sx={{ height: "79vh", overflowY: "auto", overflowX: "hidden" }}
          key={1}
        >
          {(data == "All password" ? allpassword : design)

            .filter((data) => {
              if (query === "") {
                return data;
              } else if (
                data.text.toLowerCase().includes(query.toLowerCase())
              ) {
                return data;
              }
            })
            .map((data, index) => (
              <>
                <Options
                  select={select}
                  text={data.text}
                  index={index}
                  stateSetter={stateSetter}
                  match={data}
                />
              </>
            ))}
        </List>
      </Box>
    </Box>
  );
};

export default ListingNav;
