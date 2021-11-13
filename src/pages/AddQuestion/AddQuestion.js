import React, { useContext, useEffect, useState } from 'react';
import { VarsitiesInfo } from '../../App';
import { Button } from '@mui/material';
import VarsityInfoForm from '../../components/AllQuestionForms/VarsityInfoForm';

const AddQuestion = () => {
  const [varsitiesInfo] = useContext(VarsitiesInfo)

  const [varsityName, setVarsityName] = useState('')
  const [accYear, setAccYear] = useState('')
  const [unit, setUnit] = useState('')
  const [varsityYears, setVarsityYears] = useState([])
  const [varsityUnits, setVarsityUnits] = useState([])

  useEffect(() => {
    const varsity = varsitiesInfo.filter(varsity => varsity.name === varsityName)
    setVarsityYears(varsity[0]?.accYear)
    setVarsityUnits(varsity[0]?.units)

  }, [varsityName, varsitiesInfo])

  const createQuestion = (e) => {
    e.preventDefault();
    const questionData = {
      varsityName,
      accYear,
      unit,
    }
    console.log(questionData)
  }

  return (
    <div className="container mx-auto">
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