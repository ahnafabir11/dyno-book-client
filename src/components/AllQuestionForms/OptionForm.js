import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { BsTrashFill } from 'react-icons/bs';
import { BsPlusLg } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const OptionForm = (props) => {
  const {
    options, setOptions,
    answer, setAnswer,
    setSnackbarOpen,
    setAlertType,
    setAlertMessage
  } = props;

  const [option, setOption] = useState('')

  const addNewOption = () => {
    if (options.length <= 4) {
      setOptions([...options, option])
      setOption('')
    } else {
      setOption('')
      setAlertType('warning')
      setAlertMessage('cannot add more than 5')
      setSnackbarOpen(true)
    }

  }

  const deleteOption = (index) => {
    const newOption = options.filter((item, idx) => idx !== index)
    setOptions(newOption)
  }

  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Options</h2>

      <div className="flex flex-col gap-3">
        {
          options?.map((option, index) =>
            <div
              key={index}
              className="flex options-center gap-3"
            >
              <TextField
                multiline
                disabled
                fullWidth
                size="small"
                value={option}
              />

              <IconButton
                color="error"
                onClick={() => deleteOption(index)}
              >
                <BsTrashFill />
              </IconButton>

              <IconButton
                color="success"
                onClick={() => setAnswer(option)}
              >
                {answer === option ? <IoCheckmarkDoneSharp /> : <ImCheckmark />}
              </IconButton>
            </div>
          )
        }

        <div className="flex items-center gap-3">
          <TextField
            multiline
            fullWidth
            size="small"
            value={option}
            label={`Option ${options.length + 1}`}
            onChange={(e) => setOption(e.target.value)}
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