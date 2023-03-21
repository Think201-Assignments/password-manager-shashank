import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import PrimaryButton from "./UI-Components/contentNav/primary-Button";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CustomDialogBox from "./UI-Components/CustomDialogBox";

import SimpleFormContainer from "@/componenets/ContentBox/EditFormFormik/formintegeration";

interface props {
  children?: React.ReactNode;
}
const ContentNav: React.FC<props> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  // const OnClickEvent = () => {
  //   console.log("clicked");
  // };
  const handleClickOpen = () => {
    console.log("state-change");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{ width: "170vh" }}>
        <Box
          sx={{
            pt: 0,
            height: "60px",
            //   width: "auto",
            display: "flex",
            //   flexDirection: "row",
            justifyContent: "space-between",
            boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.12);",
          }}
        >
          <Box sx={{ display: "flex", pl: 6, pt: 2.3 }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "900" }}>
              DESIGN
            </Typography>
            &nbsp;
            <Typography
              sx={{ fontSize: "14px", color: "#00000054", fontWeight: "900" }}
            >
              / FIGMA
            </Typography>
          </Box>
          <Box sx={{ display: "flex", pt: 0.4 }}>
            <Box sx={{ pt: 1 }}>
              <IconButton
                sx={{
                  height: "35px",
                  width: "35px",
                  border: "1px solid #EFEFEF",
                }}
              >
                <PersonAddAltOutlinedIcon />
              </IconButton>
              &nbsp;
              <IconButton
                sx={{
                  height: "35px",
                  width: "35px",
                  border: "1px solid #EFEFEF",
                  ml: 1,
                }}
              >
                <MoreHorizIcon />
              </IconButton>
              &nbsp;
            </Box>

            <PrimaryButton
              sx={{ my: 1.2, mr: 5, ml: 1.5 }}
              OnClickEvent={handleClickOpen}
            >
              <Typography sx={{ fontSize: "12px", color: "white" }}>
                Add password
              </Typography>
            </PrimaryButton>
          </Box>
        </Box>
        {children}
      </Box>
      <CustomDialogBox
        handleClose={handleClose}
        Title={"Add New Password"}
        open={open}
      >
        {/* <EditForm /> */}
        {/* <SignupForm /> */}
        <SimpleFormContainer handleClose={handleClose} />
      </CustomDialogBox>
    </>
  );
};

export default ContentNav;
