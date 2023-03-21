import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from "next/link";

const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid #EFEFEF",
            p: 8,
          }}
        >
          <Typography
            component="h1"
            sx={{ fontWeight: 300, mt: 0, pb: 3, color: "#000000A8" }}
            variant="h5"
          >
            Password Manager
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "#EFEFEF" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component="h1"
            sx={{ fontWeight: 600, mt: 2, color: "#000000A8" }}
            variant="h5"
          >
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Link href="/all-password">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                // color=""
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "primary",
                  textDecoration: "none",
                }}
              >
                Sign In
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
