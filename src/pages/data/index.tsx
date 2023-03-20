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
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityTwoToneIcon from "@mui/icons-material/VisibilityTwoTone";
import { setConstantValue } from "typescript";
import { table } from "console";
// import Visibility from "@material-ui/icons/Visibility";
import ContentCopySharpIcon from "@mui/icons-material/ContentCopySharp";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
interface props {
  tableData: any;
}

const Content: React.FC<props> = ({ tableData }) => {
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

  //   setValue(tableData.password);

  return (
    // <TableContainer component={Paper}>
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {/* <Button onClick={handleClick}>Share</Button> */}
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
      <Stack>
        <Box
          sx={{
            maxWidth: "730px",
            display: "flex",
            justifyContent: "space-between",

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
              <Box sx={{ fontWeight: 700, fontSize: "19px", pl: 2 }}>
                {tableData?.company}
              </Box>
            </Box>
            <Stack>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ mt: 2, color: "#4E54C8" }}>
                  12 users
                </Typography>
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
        {/* </Box> */}
        <Table sx={{ width: 750 }} aria-label="simple table">
          <TableBody>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)", height: "70px" }}
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)", height: "70px" }}
                component="th"
                scope="row"
              >
                password
              </TableCell>
              <TableCell align="left">
                {/* {passwordstatus
                  ? tableData.password
                  : tableData?.password.length} */}
                {/* {tableData.password} */}
                <OutlinedInput
                  sx={{
                    borderRadius: 0,
                    outline: "none",
                    "& fieldset": { border: "none" },
                  }}
                  // disableUnderline={false}
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
                        // onMouseDown={handleMouseDownPassword}
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)", height: "70px" }}
                component="th"
                scope="row"
              >
                token
              </TableCell>
              <TableCell align="left">
                <OutlinedInput
                  sx={{ borderRadius: 0, "& fieldset": { border: "none" } }}
                  id="outlined-adornment-password"
                  value={tableData?.token}
                  readOnly
                  type={tokenstatus ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() =>
                          tokenstatus
                            ? setTokenStatus(true)
                            : setTokenStatus(false)
                        }
                        // onMouseDown={handleMouseDownPassword}
                        edge="end"
                      ></IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
                {/* {tokenstatus ? tableData.token : tableData.token.length} */}
              </TableCell>
              <TableCell align="right">
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)", height: "70px" }}
                style={{ width: "30%" }}
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)" }}
                component="th"
                scope="row"
              >
                tags
              </TableCell>
              <TableCell align="left">
                {tableData?.tags?.map((d: any) => (
                  <Chip sx={{ m: 0.5, borderRadius: "4px" }} label={d} />
                ))}
              </TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)", height: "70px" }}
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                sx={{ color: "rgba(0, 0, 0, 0.54)", height: "70px" }}
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
      </Stack>
    </Box>
  );
};

export default Content;
