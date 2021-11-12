import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageTitle } from '../../App';
import { Alert, Snackbar } from '@mui/material';
import VarsityNameForm from '../../components/VarsityAllForms/VarsityNameForm';
import VarsityYearForm from '../../components/VarsityAllForms/VarsityYearForm';
import VarsityUnitForm from '../../components/VarsityAllForms/VarsityUnitForm';

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
    <div className="container mx-auto">
      <VarsityNameForm
        varsity={varsity}
        setSnackbarOpen={setSnackbarOpen}
        setAlertType={setAlertType}
        setAlertMessage={setAlertMessage}

      />

      <div className="flex flex-col justify-center px-3 gap-3 sm:flex-row">
        <div className="flex-1 flex justify-center">
          <VarsityYearForm
            varsity={varsity}
            setSnackbarOpen={setSnackbarOpen}
            setAlertType={setAlertType}
            setAlertMessage={setAlertMessage}
          />
        </div>

        <div className="flex-1 flex justify-center">
          <VarsityUnitForm
            varsity={varsity}
            setSnackbarOpen={setSnackbarOpen}
            setAlertType={setAlertType}
            setAlertMessage={setAlertMessage}
          />
        </div>
      </div>

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