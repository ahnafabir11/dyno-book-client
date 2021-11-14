import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageTitle } from '../../App';
import { Snackbar, Alert } from '@mui/material';

const AdmissionQuestion = () => {
  const { varsityName, accYear } = useParams()

  const [, setPageTitle] = useContext(PageTitle)

  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [alertType, setAlertType] = useState('error')
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => setPageTitle(`${varsityName} | ${accYear} | Dyno Book`))

  useEffect(() => {
    fetch("http://localhost:5000/api/questions/filter", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ varsityName, accYear })
    })
      .then(res => res.json())
      .then(data => {

      })
      .catch(err => {
        setAlertType("error")
        setAlertMessage("something went wrong")
        setSnackbarOpen(true)
      })
  }, [varsityName, accYear])

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }

  return (
    <div className="max-w-4xl container mx-auto p-2">
      <div className="shadow-lg mt-5 px-2 py-10 bg-gray-100">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-center capitalize sm:text-2xl md:text-3xl">
            {varsityName} admission test
          </h1>
          <h3 className="text-sm font-semibold text-center sm:text-lg md:text-xl">
            Academic Year {accYear} ( - Unit)
          </h3>
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

export default AdmissionQuestion;