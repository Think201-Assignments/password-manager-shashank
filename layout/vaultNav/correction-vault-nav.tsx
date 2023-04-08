import {
  Box,
  IconButton,
  List,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Link from "next/link";
import React, { useState } from "react";
import VaultHeader from "../components/vaultNav/header";
import VaultOptions from "../components/vaultNav/options";
import { Router, useRouter } from "next/router";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
interface props {
  selectData?: any;
  select?: any;
  Vaultheading?: any;
  // propsData: any;s
}

const CorrectionVaultNav: React.FC<props> = ({ Vaultheading }) => {
  const [form, setForm] = useState({
    text: "",
    link: "",
  });
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const drawerWidth = 240;
  const route = useRouter();
  const { companyId, category } = route.query;
  const data = [
    { text: "All password", link: `/${companyId}/all-password` },
    { text: "Favourites", link: `/${companyId}/favourites` },
  ];
  // let department = [{ text: "Design", link: `/${companyId}/all-password` }];
  const [department, setDepartment] = useState<any | []>([
    { text: "Design", link: `/${companyId}/all-password` },
  ]);

  const [select, selectData] = useState(category ? category : "");
  const OnChangeHandler = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = () => {
    if (form.text.length > 0) {
      setDepartment([
        ...department,
        {
          text: form.text,
          link: `/${form.text}`,
        },
      ]);
    }
    handleClose();
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            pt: 4,
            height: "9vh",
          }}
        >
          <Stack>
            <VaultHeader
              sx={{ display: "flex", fontSize: "20px", fontWeight: "700" }}
              // heading
              heading={companyId}
            />
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                pl: 4,
                color: "#000000A8",
              }}
            >
              21 Members
            </Typography>
          </Stack>
        </Box>
        <Box
          sx={{
            width: "260px",
            height: "91vh",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.12)",
          }}
        >
          <List sx={{ pt: 9 }}>
            {data.map((data, index) => (
              <VaultOptions
                key={index}
                index={index}
                data={data}
                select={select}
                selectData={selectData}
              />
            ))}
          </List>
          <Box sx={{ pl: 4, display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{
                mt: 3,
                // pb: 3,
                // mb: 2,
                fontSize: "12px",
                fontWeight: "700",
                color: "#00000054",
                textTransform: "uppercase",
              }}
            >
              Department
            </Typography>
            <IconButton sx={{ mt: 1.3, mr: 1 }} onClick={handleClick}>
              <AddCircleOutlineIcon />
            </IconButton>
          </Box>
          {/* <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
          > */}
          {open && (
            <Box sx={{ display: "flex", p: 0.7 }}>
              <TextField
                size="small"
                sx={{ width: "200px", ml: 1 }}
                // sx={{ m: 0, width: "28ch" }}
                // width={}
                name="text"
                value={form.text}
                onChange={OnChangeHandler}
                label="Add Department"
                variant="outlined"
              />

              <IconButton
                onClick={() => {
                  onSubmitHandler();
                }}
              >
                <DownloadDoneIcon sx={{ height: "30px", width: "30px" }} />
              </IconButton>
            </Box>
          )}
          {/* </Popover> */}
          <List>
            {department.map((data: any, index: any) => (
              <VaultOptions index={index} data={data} />
            ))}
          </List>
          <Box sx={{ pl: 4 }}>
            <Typography
              sx={{
                mt: 3,
                fontSize: "12px",
                fontWeight: "700",
                color: "#00000054",
                textTransform: "uppercase",
              }}
            >
              user management
            </Typography>
          </Box>
          <List>
            {[{ text: "Design", link: `/${companyId}/all-password` }].map(
              (data: any, index: any) => (
                <VaultOptions index={index} data={data} />
              )
            )}
          </List>
        </Box>
      </Box>
    </>
  );
};

export default CorrectionVaultNav;
