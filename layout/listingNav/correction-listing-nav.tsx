import {
  Hidden,
  InputAdornment,
  List,
  Skeleton,
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
import { useListingContext } from "../../context/ListingContext";

// import InputAdornment from "@mui/material/InputAdornment";

interface props {
  children?: React.ReactNode;
  data?: any;
  selectspecific: any;

  // baselink: any;
}

const CorrectionListingNav: React.FC<props> = ({
  children,
  //   data,
  selectspecific,

  // baselink,
}) => {
  const [password, setPassword] = useState<any | []>([]);
  const { reload, setReloadAction } = useListingContext();
  const [condition, setCondition] = useState(false);

  // useEffect(() => setPassword(allpassword), [listingdata]);
  useEffect(() => {
    condition && setCondition(false);
    setPassword(allpassword);
    setSelect(allpassword[0].text);
    setTimeout(() => {
      setCondition(true);
    }, 1000);
  }, [reload]);
  const router = useRouter();
  const { companyId, category } = router.query;
  const [select, setSelect] = useState(allpassword[0].text);

  const [query, setQuery] = useState("");

  const stateSetter = (data: any) => {
    setSelect(data);
    // selectspecific(data);
  };

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
              {category === "all-password" ? "All Password" : null}
              {category === "favourites" ? "Favourites" : null}
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
            {category === "all-password"
              ? "All Password"
              : category + " " + "Password"}
          </Typography>
        </Box>
        <List
          sx={{ height: "79vh", overflowY: "auto", overflowX: "hidden" }}
          key={1}
        >
          {/* {(category == "all-password" ? allpassword : design) */}

          {password
            .filter((data: any) => {
              if (query === "") {
                return data;
              } else if (
                data.text.toLowerCase().includes(query.toLowerCase())
              ) {
                return data;
              }
            })
            .map((data: any, index: any) => (
              <>
                {condition ? (
                  <Link
                    style={{ textDecoration: "none" }}
                    href={`/${companyId}/${category}/${
                      data.text[0].toLowerCase() + data.text.slice(1)
                    }`}
                  >
                    <Options
                      select={select}
                      text={data.text}
                      index={index}
                      stateSetter={stateSetter}
                      match={data}
                      // baselink={baselink}
                    />
                  </Link>
                ) : (
                  <>
                    {" "}
                    <Skeleton
                      variant="rectangular"
                      sx={{ ml: 2, mb: 2 }}
                      width={210}
                      height={50}
                    />
                    {/* <Skeleton
                      variant="rectangular"
                      sx={{ ml: 2 }}
                      width={210}
                      height={10}
                    /> */}
                    {/* <Skeleton
                      variant="rectangular"
                      sx={{ ml: 2 }}
                      width={210}
                      height={10}
                    /> */}
                  </>
                )}
              </>
            ))}
        </List>
      </Box>
    </Box>
  );
};

export default CorrectionListingNav;
