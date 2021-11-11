import "./Login.css";
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedInUser, PageTitle } from "../../App";
import {
  Container, Box, Avatar,
  Typography, TextField, Button,
  Alert, AlertTitle, Snackbar
} from "@mui/material";
import { AiFillLock } from "react-icons/ai";

const Login = () => {
  const navigate = useNavigate()

  const [, setLoggedInUser] = useContext(LoggedInUser)
  const [, setPageTitle] = useContext(PageTitle)

  const [errorMessage, setErrorMessage] = useState(null)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  useEffect(() => setPageTitle("Login | Dyno Book"))

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    fetch("http://localhost:5000/api/users/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password')
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.data.length > 0) {
          navigate('/')
          setSnackbarOpen(false)
          setLoggedInUser(data.data[0])

        } else {
          setErrorMessage(data.response.message)
          setSnackbarOpen(true)

        }
      })
      .catch(err => {
        setErrorMessage("something went wrong")
        setSnackbarOpen(true)
      })

  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }


  return (
    <Container component="main" maxWidth="xs">
      <Alert severity="warning" sx={{ marginTop: 1 }}>
        <AlertTitle>Warning</AlertTitle>
        This page is only for admin user
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

      {/* wrong credential alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={handleSnackbarClose}>{errorMessage}</Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
