import React, { useContext, useEffect, useState } from 'react';
import { PageTitle, VarsitiesInfo } from '../../App';
import { Button, Snackbar, Alert } from '@mui/material';
import VarsityInfoForm from '../../components/AllQuestionForms/VarsityInfoForm';
import QuestionForm from './../../components/AllQuestionForms/QuestionForm';
import OptionForm from './../../components/AllQuestionForms/OptionForm';
import ExplanationForm from '../../components/AllQuestionForms/ExplanationForm';
import CategoryForm from '../../components/AllQuestionForms/CategoryForm';

const AddQuestion = () => {
  const [, setPageTitle] = useContext(PageTitle)
  const [varsitiesInfo] = useContext(VarsitiesInfo)

  const [varsityName, setVarsityName] = useState('')
  const [accYear, setAccYear] = useState('')
  const [unit, setUnit] = useState('')
  const [question, setQuestion] = useState('')
  const [questionPassage, setQuestionPassage] = useState('')
  const [options, setOptions] = useState([])
  const [answer, setAnswer] = useState('')
  const [explanation, setExplanation] = useState('')
  const [category, setCategory] = useState([])
  const [varsityYears, setVarsityYears] = useState([])
  const [varsityUnits, setVarsityUnits] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [alertType, setAlertType] = useState('error')
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => setPageTitle('Add New Question | Dyno Book'))

  useEffect(() => {
    const varsity = varsitiesInfo.filter(varsity => varsity.name === varsityName)
    setAccYear('')
    setUnit('')
    setVarsityYears(varsity[0]?.accYear)
    setVarsityUnits(varsity[0]?.units)

  }, [varsityName, varsitiesInfo])

  const createQuestion = (e) => {
    e.preventDefault()
    let questionData = {}
    questionData = { ...questionData, questionPassage}
    questionData = { ...questionData, explanation }

    if (category.length > 0) {
      questionData = { ...questionData, category }
    } else {
      setAlertType('warning')
      setAlertMessage('please select 1 category')
      setSnackbarOpen(true)
    }

    if (Object.keys(answer).length > 0) {
      questionData = { ...questionData, answer }
    } else {
      setAlertType('warning')
      setAlertMessage('please select an answer')
      setSnackbarOpen(true)
    }

    if (options.length > 3) {
      questionData = { ...questionData, options }
    } else {
      setAlertType('warning')
      setAlertMessage('minimum 4 opiton required')
      setSnackbarOpen(true)
    }

    if (question !== '') {
      questionData = { ...questionData, question }
    } else {
      setAlertType('warning')
      setAlertMessage('question is required')
      setSnackbarOpen(true)
    }

    if (unit !== '') {
      questionData = { ...questionData, unit }
    } else {
      setAlertType('warning')
      setAlertMessage('select unit')
      setSnackbarOpen(true)
    }

    if (accYear !== '') {
      questionData = { ...questionData, accYear }
    } else {
      setAlertType('warning')
      setAlertMessage('selelct acc year')
      setSnackbarOpen(true)
    }

    if (varsityName !== '') {
      questionData = { ...questionData, varsityName }
    } else {
      setAlertType('warning')
      setAlertMessage('select university')
      setSnackbarOpen(true)
    }

    const questiondataKeys = ["varsityName", "accYear", "unit", "question", "options", "answer", "explanation", "category", "questionPassage"]
    const hasQuestionDataKeys = Object.keys(questionData)

    const isValid = questiondataKeys.every((val) => hasQuestionDataKeys.includes(val))

    if (isValid) {
      fetch("http://localhost:5000/api/questions/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(questionData)
      })
        .then(res => res.json())
        .then(data => {
          setQuestion('')
          setOptions([])
          setAnswer('')
          setExplanation('')
          setAlertType('success')
          setAlertMessage(data.response?.message)
          setSnackbarOpen(true)
        })
        .catch(err => {
          setAlertType('error')
          setAlertMessage('something went wrong')
          setSnackbarOpen(true)
        })
    }
  }

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }

  return (
    <div className="max-w-4xl container mx-auto">
      <h1 className="text-center mt-6 text-xl font-semibold sm:text-3xl">ADD NEW QUESTION</h1>

      <form
        onSubmit={createQuestion}
        className="my-8 px-2"
      >
        {/* select university info */}
        <VarsityInfoForm
          varsityName={varsityName}
          setVarsityName={setVarsityName}
          accYear={accYear}
          setAccYear={setAccYear}
          unit={unit}
          setUnit={setUnit}
          varsityYears={varsityYears}
          varsityUnits={varsityUnits}
        />

        {/* question in all language */}
        <QuestionForm
          questionPassage={questionPassage}
          setQuestionPassage={setQuestionPassage}
          question={question}
          setQuestion={setQuestion}
        />

        {/* options */}
        <OptionForm
          options={options}
          setOptions={setOptions}
          setSnackbarOpen={setSnackbarOpen}
          setAlertType={setAlertType}
          setAlertMessage={setAlertMessage}
          answer={answer}
          setAnswer={setAnswer}
        />

        {/* explaination */}
        <ExplanationForm
          explanation={explanation}
          setExplanation={setExplanation}
        />

        {/* category */}
        <CategoryForm
          category={category}
          setCategory={setCategory}
        />

        <Button
          variant="contained"
          type="submit"
        >
          create question
        </Button>
      </form>

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

export default AddQuestion;