import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { PageTitle } from '../../App';
import { Snackbar, Alert } from '@mui/material';

const AdmissionQuestion = () => {
  const { varsityName, accYear, unit } = useParams()

  const [, setPageTitle] = useContext(PageTitle)

  const [questions, setQuestions] = useState([])
  const [questionSubjects, setQuestionSubjects] = useState([])
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [alertType, setAlertType] = useState('error')
  const [alertMessage, setAlertMessage] = useState('')

  useEffect(() => setPageTitle(`${varsityName} | ${accYear} | Dyno Book`))

  useEffect(() => {
    fetch("http://localhost:5000/api/questions/filter", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ varsityName, accYear, unit })
    })
      .then(res => res.json())
      .then(data => {
        setQuestions(data.data)

        // getting how many subject here
        let subArray = data.data.map(q => {
          let subjects = []
          const subName = q?.category[0].value
          return subjects = [...subjects, subName]
        })
        
        subArray = subArray.flat(1)
        const uniqSub = [...new Set(subArray)]
        setQuestionSubjects(uniqSub)
      })
      .catch(err => {
        setAlertType("error")
        setAlertMessage("something went wrong")
        setSnackbarOpen(true)
      })
  }, [varsityName, accYear, unit])

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') return
    setSnackbarOpen(false)
  }

  return (
    <div className="max-w-4xl container mx-auto p-2">
      <div className="shadow-lg mt-5 px-2 py-10 bg-gray-100">
        <div className="mb-10">
          <h1 className="text-xl font-bold text-center capitalize sm:text-2xl md:text-3xl">
            {varsityName} admission test
          </h1>
          <h3 className="capitalize text-sm font-semibold text-center mb-8 sm:text-lg md:text-xl">
            Academic Year {accYear} (Unit - {unit})
          </h3>

          {
            questionSubjects.map((subject, index) =>
              <div>
                <h3 key={index} className="uppercase text-sm font-semibold text-center mb-8 sm:text-lg md:text-xl">
                  {subject}
                </h3>

                {
                  questions
                  .filter(question => question.category[0].value === subject)
                  .map(question => 
                    <h1 key={question._id}>{question.question.ban}</h1>
                  )
                }
              </div>
            )
          }
        </div>

      </div>


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

export default AdmissionQuestion;