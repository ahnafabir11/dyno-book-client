import React, { useContext, useEffect, useState } from 'react';
import { VarsitiesInfo } from '../../App';
import { TextField, IconButton } from '@mui/material';
import { BsTrashFill } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';

const VarsityYearForm = ({ varsity, setSnackbarOpen, setAlertType, setAlertMessage }) => {
  const [, setVarsitiesInfo] = useContext(VarsitiesInfo)

  const [accStart, setAccStart] = useState('')
  const [accEnd, setAccEnd] = useState('')
  const [upDatedVarsity, setUpDatedVarsity] = useState(varsity)

  useEffect(() => {
    setUpDatedVarsity(varsity)
    setAccStart("")
    setAccEnd("")
  }, [varsity])

  const deleteAccYear = (id) => {
    fetch("http://localhost:5000/api/varsities/remove/accYear", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ varsityId: varsity._id, yearId: id })
    })
      .then(res => res.json())
      .then(data => {
        fetch("http://localhost:5000/api/varsities")
          .then(res => res.json())
          .then(data => setVarsitiesInfo(data.data))
          .catch(err => {
            setAlertMessage("something went wrong")
            setAlertType("error")
            setSnackbarOpen(true)
          })
        setUpDatedVarsity(data.data[0])
        setAlertMessage("acc year deleted")
        setAlertType("success")
        setSnackbarOpen(true)
      })
      .catch(err => {
        setAlertMessage("something went wrong")
        setAlertType("error")
        setSnackbarOpen(true)
      })
  }

  const addAccYear = () => {
    let newAccYear = { varsityId: varsity._id }

    if (accStart !== '') newAccYear = { ...newAccYear, start: accStart }
    if (accEnd !== '') newAccYear = { ...newAccYear, end: accEnd }
    const isValid = Object.keys(newAccYear).length

    if (isValid === 3) {
      fetch("http://localhost:5000/api/varsities/add/accYear", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAccYear)
      })
        .then(res => res.json())
        .then(data => {
          fetch("http://localhost:5000/api/varsities")
            .then(res => res.json())
            .then(data => setVarsitiesInfo(data.data))
            .catch(err => {
              setAlertMessage("something went wrong")
              setAlertType("error")
              setSnackbarOpen(true)
            })
          setAccStart('')
          setAccEnd('')
          setUpDatedVarsity(data.data[0])
          setAlertMessage(data.response?.message)
          setAlertType("success")
          setSnackbarOpen(true)
        })
        .catch(err => {
          setAlertMessage("something went wrong")
          setAlertType("error")
          setSnackbarOpen(true)
        })

    } else {
      setAlertMessage("add starting and ending year properly")
      setAlertType("error")
      setSnackbarOpen(true)
    }
  }

  return (
    <div>
      <h1 className="text-center mt-8 text-xl sm:text-3xl">ADD/REMOVE ACC YEAR</h1>

      <div className="mt-8">
        {
          upDatedVarsity.accYear?.map(year =>
            <div
              key={year._id}
              className="flex gap-2 mb-3"
            >
              <TextField
                disabled
                size="small"
                value={year.start}
              />
              <TextField
                disabled
                size="small"
                value={year.end}
              />
              <IconButton
                color="error"
                onClick={() => deleteAccYear(year._id)}
              >
                <BsTrashFill />
              </IconButton>
            </div>
          )
        }
      </div>

      <div className="flex gap-2 mt-2">
        <TextField
          required
          size="small"
          type="number"
          value={accStart}
          placeholder="Starting Year"
          onChange={(e) => setAccStart(e.target.value)}
        />

        <TextField
          required
          size="small"
          type="number"
          value={accEnd}
          placeholder="Ending Year"
          onChange={(e) => setAccEnd(e.target.value)}
        />

        <IconButton
          color="success"
          onClick={addAccYear}
        >
          <BsPlusLg />
        </IconButton>
      </div>
    </div>
  );
};

export default VarsityYearForm;