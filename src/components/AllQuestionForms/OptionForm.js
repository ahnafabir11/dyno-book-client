import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { BsTrashFill } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const OptionForm = (props) => {
  const {
    option, setOption,
    answer, setAnswer,
    setSnackbarOpen,
    setAlertType,
    setAlertMessage
  } = props;

  const [optionBan, setOptionBan] = useState('')
  const [optionEng, setOptionEng] = useState('')

  const addNewOption = () => {
    if (option.length <= 4) {
      let newOption = { eng: optionEng }

      if (optionBan !== '') newOption = { ...newOption, ban: optionBan }
      const isValid = Object.keys(newOption).length

      if (isValid === 2) {
        setOption([...option, newOption])
        setOptionBan('')
        setOptionEng('')
      }
    } else {
      setOptionBan('')
      setOptionEng('')
      setAlertType('warning')
      setAlertMessage('cannot add more than 5')
      setSnackbarOpen(true)
    }

  }

  const deleteOption = (index) => {
    const newOption = option.filter((item, idx) => idx !== index)
    setOption(newOption)
  }

  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Options</h2>

      <div className="flex flex-col gap-3">
        {
          option?.map((item, index) =>
            <div
              key={index}
              className="flex items-center gap-3"
            >
              <TextField
                disabled
                fullWidth
                size="small"
                value={item.ban}
              />

              <TextField
                disabled
                fullWidth
                size="small"
                value={item.eng}
              />

              <IconButton
                color="error"
                onClick={() => deleteOption(index)}
              >
                <BsTrashFill />
              </IconButton>

              <IconButton
                color="success"
                onClick={() => setAnswer(item)}
              >
                {answer === item ? <IoCheckmarkDoneSharp/> : <ImCheckmark />}
              </IconButton>
            </div>
          )
        }

        <div className="flex items-center gap-3">
          <TextField
            fullWidth
            size="small"
            value={optionBan}
            label={`Option ${option.length + 1} Bangla`}
            onChange={(e) => setOptionBan(e.target.value)}
          />

          <TextField
            fullWidth
            size="small"
            value={optionEng}
            label={`Option ${option.length + 1} English (optional)`}
            onChange={(e) => setOptionEng(e.target.value)}
          />

          <IconButton
            color="success"
            onClick={addNewOption}
          >
            <BsPlusLg />
          </IconButton>
        </div>

      </div>
    </div>
  );
};

export default OptionForm;