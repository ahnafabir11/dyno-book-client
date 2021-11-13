import React, { useContext, useState } from 'react';
import { VarsitiesInfo } from './../../App';
import { TextField, Button, Snackbar, Alert } from "@mui/material";

const AddVarsityForm = () => {
  const [, setVarsitiesInfo] = useContext(VarsitiesInfo)

  const [name, setName] = useState('')
  const [shortName, setShortName] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [alertType, setAlertType] = useState("error")
  const [alertMessage, setAlertMessage] = useState("")

  const addNewVarsity = (e) => {
    e.preventDefault()
    let newVarsity = {}

    if (name !== '') newVarsity = { ...newVarsity, name }
    if (shortName !== '') newVarsity = { ...newVarsity, shortName }

    const isValid = Object.keys(newVarsity)

    if (isValid.length === 2) {
      fetch("http://localhost:5000/api/varsities/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newVarsity)
      })
        .then(res => res.json())
        .then(data => {
          fetch("http://localhost:5000/api/varsities")
            .then(res => res.json())
            .then(data => setVarsitiesInfo(data.data))
            .catch(err => console.log(err.message))

          setName('')
          setShortName('')
          setSnackbarOpen(true)
          setAlertType("success")
          setAlertMessage(data.response?.message)

        })
        .catch(err => {
          setSnackbarOpen(true)
          setAlertMessage("something went wrong")
        })

    } else {
      setSnackbarOpen(true)
      setAlertMessage("fill varsity details properly")
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }

  return (
    <form
      onSubmit={addNewVarsity}
      className="max-w-xs flex flex-col gap-2"
    >
      <TextField
        fullWidth
        size="small"
        value={name}
        placeholder="University Name"
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        fullWidth
        size="small"
        value={shortName}
        placeholder="University Short Name"
        onChange={(e) => setShortName(e.target.value)}
      />

      <Button
        fullWidth
        variant="contained"
        type="submit"
      >
        add new varsity
      </Button>

      {/* wrong credential alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={alertType} onClose={handleSnackbarClose}>{alertMessage}</Alert>
      </Snackbar>
    </form>
  );
};

export default AddVarsityForm;