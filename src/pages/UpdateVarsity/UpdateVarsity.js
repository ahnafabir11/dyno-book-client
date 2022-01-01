import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageTitle } from '../../App';
import { Alert, Snackbar } from '@mui/material';
import VarsityNameForm from '../../components/VarsityAllForms/VarsityNameForm';
import VarsityYearForm from '../../components/VarsityAllForms/VarsityYearForm';

const UpdateVarsity = () => {
  const { id } = useParams()

  const [, setPageTitle] = useContext(PageTitle)

  const [varsity, setVarsity] = useState({})
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [alertType, setAlertType] = useState("error")
  const [alertMessage, setAlertMessage] = useState("")

  useEffect(() => setPageTitle("Edit | University Info"))

  useEffect(() => {
    fetch(`http://localhost:5000/api/varsities/${id}`)
      .then(res => res.json())
      .then(data => setVarsity(data.data[0]))
      .catch(err => console.log(err.message))
  }, [id])

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-3">
      <VarsityNameForm
        varsity={varsity}
        setSnackbarOpen={setSnackbarOpen}
        setAlertType={setAlertType}
        setAlertMessage={setAlertMessage}

      />

      <VarsityYearForm
        varsity={varsity}
        setSnackbarOpen={setSnackbarOpen}
        setAlertType={setAlertType}
        setAlertMessage={setAlertMessage}
      />

      {/* wrong credential alert */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity={alertType} onClose={handleSnackbarClose}>{alertMessage}</Alert>
      </Snackbar>
    </div>
  );
};

export default UpdateVarsity;