import React, { useEffect, useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { PageTitle } from '../../App';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { IconButton, Button, Snackbar, Alert, Autocomplete, TextField } from '@mui/material';
import { BsTrashFill } from 'react-icons/bs';
import { ImCheckmark } from 'react-icons/im';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const UpdateQuestion = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [, setPageTitle] = useContext(PageTitle)

  // question states
  const [questionPassage, setQuestionPassage] = useState('')
  const [question, setQuestion] = useState('')
  const [options, setOptions] = useState([])
  const [optionValue, setOptionValue] = useState('')
  const [answer, setAnswer] = useState('')
  const [explanation, setExplanation] = useState('')
  const [category, setCategory] = useState([])

  // snakbar states
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [alertType, setAlertType] = useState('error')
  const [alertMessage, setAlertMessage] = useState('')

  // ckeditors state
  const [passageEditor, setPassageEditor] = useState({})
  const [questionEditor, setQuestionEditor] = useState({})
  const [optionEditor, setOptionEditor] = useState({})
  const [explanationEditor, setExplanationEditor] = useState({})

  useEffect(() => setPageTitle('Update Question | Dyno Book'))

  // load question data
  useEffect(() => {
    fetch(`http://localhost:5000/api/questions/${id}`)
      .then(res => res.json())
      .then(data => {
        setQuestionPassage(data.data[0].questionPassage)
        setQuestion(data.data[0].question)
        setOptions(data.data[0].options)
        setAnswer(data.data[0].answer)
        setExplanation(data.data[0].explanation)
        // setCategory(data.data[0].category)
      })
  }, [id])

  const addNewOption = () => {
    if (options.length <= 4) {
      if (optionValue !== "") {
        setOptions([...options, optionValue])
        setOptionValue('')
        optionEditor.setData('')
      } else {
        setAlertType('warning')
        setAlertMessage('option cannot be empty')
        setSnackbarOpen(true)
      }
    } else {
      setOptionValue('')
      setAlertType('warning')
      setAlertMessage('cannot add more than 5')
      setSnackbarOpen(true)
    }
  }

  const deleteOption = (index) => {
    const newOption = options.filter((item, idx) => idx !== index)
    setOptions(newOption)
  }

  // all categories
  const categoryList = [
    { value: 'bangla' },
    { value: 'english' },
    { value: 'accounting' },
    { value: 'management' },
    { value: 'finance' },
    { value: 'marketing' },
    { value: 'physics' },
    { value: 'mathematics' },
    { value: 'biology' },
    { value: 'ict' },
    { value: 'general knowledge' },
    { value: 'general knowledge (bangladesh)' },
    { value: 'general knowledge (international)' },
  ]

  const editQuestion = () => {
    let questionData = {
      id,
      questionPassage,
      explanation,
    }

    if (question !== '') {
      questionData = { ...questionData, question }
    } else {
      setAlertType('warning')
      setAlertMessage('question is required')
      setSnackbarOpen(true)
      return
    }

    if (answer !== '') {
      questionData = { ...questionData, answer }
    } else {
      setAlertType('warning')
      setAlertMessage('please select an answer')
      setSnackbarOpen(true)
      return
    }

    if (options.length <= 5) {
      questionData = { ...questionData, options }
    } else {
      setAlertType('warning')
      setAlertMessage('minimum 4 opiton required')
      setSnackbarOpen(true)
      return
    }

    if (options.length > 3) {
      questionData = { ...questionData, options }
    } else {
      setAlertType('warning')
      setAlertMessage('minimum 4 opiton required')
      setSnackbarOpen(true)
      return
    }

    if (category.length > 0) {
      questionData = { ...questionData, category }
    } else {
      setAlertType('warning')
      setAlertMessage('please select 1 category')
      setSnackbarOpen(true)
      return
    }

    const questionDataLength = Object.keys(questionData).length

    if (questionDataLength === 7) {
      fetch("http://localhost:5000/api/questions/update", {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(questionData)
      })
      .then(res => res.json())
      .then(data => {
        navigate(`/question/${data.data[0].varsityName}/${data.data[0].accYear}/${data.data[0].unit}`)
      })

    } else {
      setAlertType('warning')
      setAlertMessage('please fill all data properly')
      setSnackbarOpen(true)
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }

  return (
    <div className="max-w-4xl container mx-auto">
      <h1 className="text-center mt-6 text-xl font-semibold sm:text-3xl">EDIT QUESTION</h1>

      {/* question passage */}
      <div className="flex flex-col gap-3">
        <div>
          <h2 className="text-lg">Passage</h2>
          <div className="border rounded">
            <CKEditor
              editor={DecoupledEditor}
              data={questionPassage}
              onReady={editor => {
                editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement(),
                )
                setPassageEditor(editor);
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  passageEditor.ui.view.toolbar.element.remove()
                }
              }}
              onChange={(event, editor) => setQuestionPassage(editor.getData())}
            />
          </div>
        </div>

        {/* question */}
        <div>
          <h2 className="text-lg">Question</h2>
          <div className="border rounded">
            <CKEditor
              editor={DecoupledEditor}
              data={question}
              onReady={editor => {
                editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                )
                setQuestionEditor(editor);
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  questionEditor.ui.view.toolbar.element.remove()
                }
              }}
              onChange={(event, editor) => setQuestion(editor.getData())}
            />
          </div>
        </div>

        {/* options */}
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
                  data=""
                  editor={DecoupledEditor}
                  onReady={editor => {
                    editor.ui.getEditableElement().parentElement.insertBefore(
                      editor.ui.view.toolbar.element,
                      editor.ui.getEditableElement()
                    )
                    setOptionEditor(editor);
                  }}
                  onError={({ willEditorRestart }) => {
                    if (willEditorRestart) {
                      optionEditor.ui.view.toolbar.element.remove()
                    }
                  }}
                  onChange={(event, editor) => setOptionValue(editor.getData())}
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

        {/* explanation */}
        <div>
          <h2 className="text-lg mb-3">Explanation</h2>

          <div className="border rounded">
            <CKEditor
              editor={DecoupledEditor}
              data={explanation}
              onReady={editor => {
                editor.ui.getEditableElement().parentElement.insertBefore(
                  editor.ui.view.toolbar.element,
                  editor.ui.getEditableElement()
                )
                setExplanationEditor(editor);
              }}
              onError={({ willEditorRestart }) => {
                if (willEditorRestart) {
                  explanationEditor.ui.view.toolbar.element.remove()
                }
              }}
              onChange={(event, editor) => setExplanation(editor.getData())}
            />
          </div>
        </div>

        {/* category */}
        <div>
          <h2 className="text-lg mb-3">Category</h2>

          <Autocomplete
            multiple
            size="small"
            options={categoryList}
            getOptionLabel={(option) => option.value}
            filterSelectedOptions
            isOptionEqualToValue={(option, value) => option.value === value.value}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Category"
              />
            )}
            onChange={(e, value) => setCategory(value)}
          />
        </div>
      </div>

      <Button
        sx={{ my: 3 }}
        variant="contained"
        onClick={editQuestion}
      >
        edit question
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
    </div>
  );
};

export default UpdateQuestion;