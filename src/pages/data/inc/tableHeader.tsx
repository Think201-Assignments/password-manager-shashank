import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import React from "react";
interface props {
  tableData: any;
}

const TableHeader: React.FC<props> = ({ tableData }) => {
  return (
    <Box
      sx={{
        maxWidth: "730px",
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "Montserrat",

        color: "#000000A8",

        my: 4,
      }}
    >
      <Box>
        <Box display="flex">
          <Avatar
            sx={{
              bgcolor: tableData ? tableData.color : null,
              height: "46px",
              width: "46px",
            }}
          >
            {tableData?.company.charAt(0)}
          </Avatar>
          <Stack>
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "19px",
                pl: 2,
                fontFamily: "Montserrat",
              }}
            >
              {tableData?.company}
            </Box>
            <Box sx={{ color: "#CCCCCC" }}>
              <IconButton sx={{ height: "15px", width: "15px", pl: 3 }}>
                <StarOutlineIcon sx={{ color: "#CCCCCC" }} />
              </IconButton>
              <IconButton sx={{ height: "15px", width: "15px", pl: 2.7 }}>
                <FileUploadOutlinedIcon sx={{ color: "#CCCCCC" }} />
              </IconButton>
            </Box>
          </Stack>
        </Box>
        <Stack>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ mt: 2, color: "#4E54C8" }}>12 users</Typography>
            &nbsp;
            <Typography sx={{ mt: 2 }}>
              can view this password along with the administrator
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ display: "flex" }}>
        <IconButton
          sx={{
            height: "40px",
            width: "40px",
            pl: 1,

            border: "1px solid #EFEFEF",
          }}
        >
          <PersonAddAltOutlinedIcon />
        </IconButton>
        &nbsp; &nbsp;
        <IconButton
          sx={{
            height: "40px",
            width: "40px",
            border: "1px solid #EFEFEF",
          }}
        >
          <BorderColorTwoToneIcon />
        </IconButton>
        &nbsp; &nbsp;
        <IconButton
          sx={{
            height: "40px",
            width: "40px",

            border: "1px solid #EFEFEF",
          }}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TableHeader;
