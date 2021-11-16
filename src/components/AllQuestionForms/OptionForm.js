import React, { useState } from 'react';
import { IconButton, Button } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import ReactHtmlParser from 'react-html-parser';
import { BsTrashFill } from 'react-icons/bs';
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

  const [editor, setEditor] = useState(null)
  const [option, setOption] = useState('')

  const addNewOption = () => {
    if (options.length <= 4) {
      if (option !== "") {
        setOptions([...options, option])
        setOption('')
        editor.setData('')
      } else {
        setAlertType('warning')
        setAlertMessage('option cannot be empty')
        setSnackbarOpen(true)
      }
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
              <div className="flex-1 border rounded p-2 text-gray-300">
                {ReactHtmlParser(option)}
              </div>

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

        <div>
          <h2 className="text-lg">Option {options.length + 1}</h2>
          <div className="border rounded">
            <CKEditor
              onReady={editor => {
                editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                )
                setEditor(editor);
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  editor.ui.view.toolbar.element.remove()
                }
              }}
              editor={DecoupledEditor}
              data=""
              onChange={(event, editor) => setOption(editor.getData())}
            />

            <Button
              fullWidth
              color="success"
              variant="outlined"
              onClick={addNewOption}
            >
              add option
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionForm;