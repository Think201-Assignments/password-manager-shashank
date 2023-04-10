import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Router, useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import theme from "@/styles/theme";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Product", "Resources", "Support", "Pricing"];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);
  const route = useRouter();
  const onlyMediumScreen = useMediaQuery(theme.breakpoints.down(900));
  const onlyMediumScreen2 = useMediaQuery(theme.breakpoints.down(720));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box>
        <Typography
          sx={{ fontSize: "24px", fontWeight: "800", color: "#1B847A" }}
        >
          Helix.
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "transparent" }}>
      {/* <CssBaseline /> */}
      <AppBar
        sx={{ backgroundColor: "transparent", boxShadow: "none", pt: "20px" }}
        component="nav"
      >
        {/* <Box sx={{ display: "flex", pt: 2, justifyContent: "space-evenly" }}> */}
        <Toolbar sx={{ display: "flex" }}>
          <IconButton
            // color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              // mr: 2,
              display: { display: onlyMediumScreen2 ? "block" : "none" },
            }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                // xs: "none",
                xs: "none",
                sm: !onlyMediumScreen2 ? "block" : "none",
                fontSize: "28px",
                fontWeight: "800",
                color: "#1B847A",
              },
            }}
          >
            &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            {!onlyMediumScreen && <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
            Helix. &nbsp;
            {/* <Box> */}
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#666666",
                  mx: !onlyMediumScreen ? 1 : 0,
                  textTransform: "none",
                }}
              >
                {item}
              </Button>
            ))}
            {/* </Box> */}
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: !onlyMediumScreen2 ? "block" : "none",
              },
            }}
          >
            <Button
              sx={{
                backgroundColor: "#212121",
                color: "white",
                // padding: "12px, 24px, 12px, 24px",
                size: "13px",
                borderRadius: 0,
                textTransform: "none",
                fontWeight: "700",
                height: "44px",
                width: "100px",
              }}
              onClick={() => route.push("/sign-in")}
              variant="contained"
            >
              Sign In
            </Button>
            &nbsp;&nbsp;
            <Button
              sx={{
                backgroundColor: "#4DB6AC",
                color: "white",
                // padding: "12px, 24px, 12px, 24px",
                fontWeight: "700",
                size: "13px",
                borderRadius: 0,
                textTransform: "none",
                height: "44px",
                width: "100px",
                mr: 4,
              }}
              variant="contained"
              onClick={() => route.push("/sign-up")}
            >
              Sign up
            </Button>
            {!onlyMediumScreen && (
              <>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              </>
            )}
            &nbsp;&nbsp;
          </Box>
        </Toolbar>
        {/* </Box> */}
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: onlyMediumScreen2 ? "block" : "none",

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
