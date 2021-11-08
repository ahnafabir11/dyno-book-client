import './LandingPage.css'
import React, { useContext, useEffect, useState } from 'react';
import { ExamTypeContext, PageTitle } from '../../App';
import { Box } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import topSectionImg from '../../images/home-page-img.png';
import secondSectionImg from '../../images/home-page-img-2.png';

const LandingPage = () => {
  const [, setPageTitle] = useContext(PageTitle)
  const [examType, setExamType] = useContext(ExamTypeContext)

  useEffect(() => {
    setPageTitle('Dyno Book')
  }, [])

  return (
    <div className="LandingPage">
      <section className="container mx-auto px-3 xm:px-0">
        <section className="flex flex-col items-start -space-y-5 mt-8 sm:items-end sm:flex-row sm:-space-y-0 sm:mt-14">
          <div className="flex-1">
            <h1 className="text-3xl font-medium mb-6 mt-6 xs:text-4xl sm:text-3xl sm:mt-0 md:text-4xl lg:text-5xl xl:text-6xl lg:font-semibold xl:font-bold">
              Are You Preparing
              <br /> For Your Exam ?
            </h1>
            <Box sx={{ maxWidth: 250 }}>
              <FormControl fullWidth>
                <InputLabel>Select Exam Type</InputLabel>
                <Select
                  label="Select Exam Type"
                  value={examType}
                  onChange={(e) => setExamType(e.target.value)}
                >
                  <MenuItem value={'admission_test'}>Admission Test</MenuItem>
                  <MenuItem value={'hsc_exam'}>HSC Exam</MenuItem>
                  <MenuItem value={'ssc_exam'}>SSC Exam</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div className="flex-1">
            <img src={topSectionImg} alt="exam preparation" />
          </div>
        </section>

        <section className="mb-8">
          <h1 className="text-center mt-10 text-lg font-bold xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl md:mt-20">
            LOOKING FOR ADMISSION QUESTION
          </h1>

          <div className="flex flex-col-reverse items-center sm:flex-row sm:mt-8 sm:space-x-5 lg:mt-20">
            <div className="flex-1 -mt-10 sm:-mt-0">
              <img src={secondSectionImg} alt="admission question" />
            </div>

            <div className="flex-1">
              <p className="text-justify mt-5 text-sm xs:text-base sm:mt-0 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                Collecting admission question of different University of every year is really hard for any student. Dyno Book is all in one solution for this problem. You can find all the admission question of every University in Bangladesh. We have made our UI/Ux so simple that you won’t feel you are browsing a website. You will feel like you are reading a book.
              </p>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
};

export default LandingPage;