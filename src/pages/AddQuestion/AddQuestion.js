import React, { useContext, useEffect, useState } from 'react';
import { VarsitiesInfo } from '../../App';
import { Button } from '@mui/material';
import VarsityInfoForm from '../../components/AllQuestionForms/VarsityInfoForm';
import QuestionForm from './../../components/AllQuestionForms/QuestionForm';

const AddQuestion = () => {
  const [varsitiesInfo] = useContext(VarsitiesInfo)

  const [varsityName, setVarsityName] = useState('')
  const [accYear, setAccYear] = useState('')
  const [unit, setUnit] = useState('')
  const [questionBan, setQuestionBan] = useState('')
  const [questionEng, setQuestionEng] = useState('')
  const [questionBng, setQuestionBng] = useState('')
  const [varsityYears, setVarsityYears] = useState([])
  const [varsityUnits, setVarsityUnits] = useState([])

  useEffect(() => {
    const varsity = varsitiesInfo.filter(varsity => varsity.name === varsityName)
    setAccYear('')
    setUnit('')
    setVarsityYears(varsity[0]?.accYear)
    setVarsityUnits(varsity[0]?.units)

  }, [varsityName, varsitiesInfo])

  const createQuestion = (e) => {
    e.preventDefault();
    let questionData = {}
    let question = {
      eng: questionEng,
      bng: questionBng,
    }

    if (varsityName !== '') questionData = { ...questionData, varsityName }
    if (accYear !== '') questionData = { ...questionData, accYear }
    if (unit !== '') questionData = { ...questionData, unit }
    if (questionBan !== '') {
      question = {...question, ban: questionBan}
      questionData = { ...questionData, question }
    }
    console.log(questionData)
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
          questionBan={questionBan}
          setQuestionBan={setQuestionBan}
          questionEng={questionEng}
          setQuestionEng={setQuestionEng}
          questionBng={questionBng}
          setQuestionBng={setQuestionBng}
        />

        <Button
          variant="contained"
          type="submit"
        >
          create question
        </Button>
      </form>
    </div>
  );
};

export default AddQuestion;