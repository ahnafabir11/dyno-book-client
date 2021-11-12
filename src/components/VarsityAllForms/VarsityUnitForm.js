import React, { useContext, useEffect, useState } from 'react';
import { VarsitiesInfo } from '../../App';
import { TextField, IconButton } from '@mui/material';
import { BsTrashFill } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';

const VarsityUnitForm = ({ varsity, setSnackbarOpen, setAlertType, setAlertMessage }) => {
  const [, setVarsitiesInfo] = useContext(VarsitiesInfo)

  const [updatedVarsity, setUpdatedVarsity] = useState({})
  const [unitCode, setUnitCode] = useState('')
  const [unitGroup, setUnitGroup] = useState('')

  useEffect(() => {
    setUpdatedVarsity(varsity)
    setUnitCode('')
    setUnitGroup('')
  }, [varsity])

  const addNewUnit = () => {
    let newUnitData = { varsityId: varsity._id }

    if (unitCode !== '') newUnitData = { ...newUnitData, code: unitCode }
    if (unitGroup !== '') newUnitData = { ...newUnitData, group: unitGroup }
    const isValid = Object.keys(newUnitData).length

    if (isValid === 3) {
      fetch("http://localhost:5000/api/varsities/add/unit", {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUnitData)
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
        
        setUnitCode('')
        setUnitGroup('')
        setUpdatedVarsity(data.data[0])
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
      setAlertMessage("add unit information properly")
      setAlertType("error")
      setSnackbarOpen(true)
    }
  }

  const deleteUnit = (id) => {
    fetch("http://localhost:5000/api/varsities/remove/unit", {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ varsityId: varsity._id, unitId: id })
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

        setUpdatedVarsity(data.data[0])
        setAlertMessage(data.response?.message)
        setAlertType("success")
        setSnackbarOpen(true)
      })
      .catch(err => {
        setAlertMessage("something went wrong")
        setAlertType("error")
        setSnackbarOpen(true)
      })
  }

  return (
    <div>
      <h1 className="text-center mt-8 text-xl sm:text-3xl">ADD/REMOVE ACC YEAR</h1>

      <div className="mt-8">
        {
          updatedVarsity.units?.map(unit =>
            <div
              key={unit._id}
              className="flex gap-2 mb-3"
            >
              <TextField
                disabled
                size="small"
                value={unit.code}
              />
              <TextField
                disabled
                size="small"
                value={unit.group}
              />
              <IconButton
                color="error"
                onClick={() => deleteUnit(unit._id)}
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
          value={unitCode}
          placeholder="Unit Code"
          onChange={(e) => setUnitCode(e.target.value)}
        />

        <TextField
          required
          size="small"
          value={unitGroup}
          placeholder="Unit Group"
          onChange={(e) => setUnitGroup(e.target.value)}
        />

        <IconButton
          color="success"
          onClick={addNewUnit}
        >
          <BsPlusLg />
        </IconButton>
      </div>
    </div>
  );
};

export default VarsityUnitForm;