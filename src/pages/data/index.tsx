import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { link } from "fs";
import React, { useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DataTable from "./inc/table";
import TableHeader from "./inc/tableHeader";
interface props {
  tableData: any;
}

const Content: React.FC<props> = ({ tableData }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // fontFamily: "Montserrat",
      }}
    >
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
      <Stack>
        <TableHeader tableData={tableData} />

        <DataTable tableData={tableData} />
      </Stack>
    </Box>
  );
};

export default Content;
