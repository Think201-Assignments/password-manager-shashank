import {
  Chip,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  //   Table,
} from "@mui/material";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import { setConstantValue } from "typescript";
import { table } from "console";
// import Visibility from "@material-ui/icons/Visibility";
import ContentCopySharpIcon from "@mui/icons-material/ContentCopySharp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import React, { useEffect, useRef, useState } from "react";
interface props {
  tableData: any;
}

const DataTable: React.FC<props> = ({ tableData }) => {
  console.log(tableData);
  const [passwordstatus, setPasswordStatus] = useState(false);
  const [tokenstatus, setTokenStatus] = useState(false);
  const [value, setValue] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const [open, setOpen] = useState(false);
  const handleClick = (data: any) => {
    console.log(data);
    setOpen(true);
    navigator.clipboard.writeText(data);
  };
  useEffect(() => {
    setPasswordStatus(false);
    setTokenStatus(false);
  }, [tableData]);

  return (
    <Table sx={{ width: 750 }} aria-label="simple table">
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
      <TableBody>
        {/* {login} */}
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            component="th"
            scope="row"
          >
            login
          </TableCell>
          <TableCell align="left">{tableData?.login}</TableCell>
          <TableCell align="right">
            {" "}
            <IconButton onClick={() => handleClick(tableData?.login)}>
              {" "}
              <ContentCopySharpIcon sx={{ color: "#CCCCCC" }} />
            </IconButton>
          </TableCell>
        </TableRow>
        {/* {login} */}
        {/* {password} */}
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)", height: "65px" }}
            component="th"
            scope="row"
          >
            password
          </TableCell>

          <TableCell align="left" sx={{ height: "65px" }}>
            <OutlinedInput
              sx={{
                borderRadius: 0,
                outline: "none",
                "& fieldset": { border: "none" },
                height: "20px",
              }}
              id="outlined-adornment-password"
              value={tableData?.password}
              readOnly
              type={passwordstatus ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      passwordstatus
                        ? setPasswordStatus(false)
                        : setPasswordStatus(true)
                    }
                    edge="end"
                  ></IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </TableCell>
          <TableCell align="right">
            {" "}
            <IconButton
              onClick={() =>
                passwordstatus
                  ? setPasswordStatus(false)
                  : setPasswordStatus(true)
              }
            >
              {passwordstatus ? (
                <VisibilityTwoToneIcon sx={{ color: "#CCCCCC" }} />
              ) : (
                <VisibilityOffIcon sx={{ color: "#CCCCCC" }} />
              )}
            </IconButton>
            <IconButton onClick={() => handleClick(tableData?.password)}>
              {" "}
              <ContentCopySharpIcon sx={{ color: "#CCCCCC" }} />
            </IconButton>
          </TableCell>
        </TableRow>
        {/* {password} */}
        {/* {token} */}
        <TableRow
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            height: "65px",
          }}
        >
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            component="th"
            scope="row"
          >
            token
          </TableCell>
          <TableCell sx={{ height: "65px" }} align="left">
            <OutlinedInput
              sx={{
                borderRadius: 0,
                "& fieldset": { border: "none" },
                height: "20px",
              }}
              id="outlined-adornment-password"
              value={tableData?.token}
              readOnly
              type={tokenstatus ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      tokenstatus ? setTokenStatus(true) : setTokenStatus(false)
                    }
                    edge="end"
                  ></IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </TableCell>
          <TableCell sx={{ height: "65px" }} align="right">
            <IconButton
              onClick={() =>
                tokenstatus ? setTokenStatus(false) : setTokenStatus(true)
              }
            >
              {tokenstatus ? (
                <VisibilityTwoToneIcon sx={{ color: "#CCCCCC" }} />
              ) : (
                <VisibilityOffIcon sx={{ color: "#CCCCCC" }} />
              )}
            </IconButton>
            <IconButton onClick={() => handleClick(tableData?.token)}>
              {" "}
              <ContentCopySharpIcon sx={{ color: "#CCCCCC" }} />
            </IconButton>
          </TableCell>
        </TableRow>
        {/* {token} */}
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            style={{ width: "20%" }}
            component="th"
            scope="row"
          >
            link
          </TableCell>
          <TableCell align="left" sx={{ color: "#4E54C8" }}>
            {tableData?.link}
          </TableCell>
          <TableCell align="right">
            {" "}
            <IconButton onClick={() => handleClick(tableData?.link)}>
              {" "}
              <ContentCopySharpIcon sx={{ color: "#CCCCCC" }} />
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)" }}
            component="th"
            scope="row"
          >
            tags
          </TableCell>
          <TableCell align="left">
            {tableData?.tags?.map((d: any) => (
              <Chip sx={{ mx: 0.5, borderRadius: "4px" }} label={d} />
            ))}
          </TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)", height: "73px" }}
            component="th"
            scope="row"
          >
            last modified
          </TableCell>
          <TableCell align="left">February 7, 2023 3:20 PM</TableCell>
          <TableCell align="right">
            <Chip label={"View History"} variant="outlined" />
          </TableCell>
        </TableRow>
        <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableCell
            sx={{ color: "rgba(0, 0, 0, 0.54)", height: "73px" }}
            component="th"
            scope="row"
          >
            created
          </TableCell>
          <TableCell align="left">February 2, 2023 1:40 PM</TableCell>
          <TableCell align="right"></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DataTable;
