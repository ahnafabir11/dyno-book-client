import React, { useContext, useEffect, useState } from 'react';
import { VarsitiesInfo } from '../../App';
import { TextField, Button } from '@mui/material';

const VarsityNameForm = ({ varsity, setSnackbarOpen, setAlertType, setAlertMessage }) => {
  const [, setVarsitiesInfo] = useContext(VarsitiesInfo)
  const [name, setName] = useState("")
  const [shortName, setShortName] = useState("")

  useEffect(() => {
    setName("")
    setShortName("")
  }, [varsity])

  const updateVarsityName = (e) => {
    e.preventDefault();

    let value = { id: varsity._id }
    if (name !== "") value = { ...value, name }
    if (shortName !== "") value = { ...value, shortName }

    const isValid = Object.keys(value)

    if (isValid.length > 1) {
      fetch("http://localhost:5000/api/varsities/update/name", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value)
      })
        .then(res => res.json())
        .then(data => {
          fetch("http://localhost:5000/api/varsities")
            .then(res => res.json())
            .then(data => setVarsitiesInfo(data.data))
            .catch(err => console.log(err.message))
        })
        .catch(err => console.log(err.message))

      setSnackbarOpen(true)
      setAlertType('success')
      setAlertMessage("Varsity Info Updated")

    } else {
      setSnackbarOpen(true)
      setAlertType("error")
      setAlertMessage("minimum one field need to be changed")
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-3">
      <h1 className="text-center mt-6 text-xl sm:text-3xl">UPDATE VARSITY NAME</h1>
      <form
        onSubmit={updateVarsityName}
        className='mt-8 flex flex-col gap-5 sm:flex-row'
      >
        <TextField
          name="fname"
          autoComplete="off"
          placeholder={varsity.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ flexGrow: 1 }}

        />

        <TextField
          name="sname"
          autoComplete="off"
          placeholder={varsity.shortName}
          value={shortName}
          onChange={(e) => setShortName(e.target.value)}
        />

        <Button variant="contained" type="submit">update name</Button>
      </form>
    </div>
  );
};

export default VarsityNameForm;