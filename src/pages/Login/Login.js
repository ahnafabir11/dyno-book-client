import "./Login.css";
import React, { useEffect, useContext } from "react";
import { PageTitle } from "../../App";
import {
  Container,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Alert, AlertTitle
} from "@mui/material";
import { AiFillLock } from "react-icons/ai";

const Login = () => {
  const [, setPageTitle] = useContext(PageTitle)

  useEffect(() => setPageTitle("Login | Dyno Book"))

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Alert severity="warning" sx={{marginTop: 1}}>
        <AlertTitle>Warning</AlertTitle>
        This Login page is for admin users only. Don't try to LoginIn if you are not admin!
      </Alert>

      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "#ddd" }}>
          <AiFillLock />
        </Avatar>

        <Typography component="h1" variant="h5">
          SIGN IN
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            margin="normal"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            required
            fullWidth
            margin="normal"
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          
          <Button fullWidth variant="contained" type="submit" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
