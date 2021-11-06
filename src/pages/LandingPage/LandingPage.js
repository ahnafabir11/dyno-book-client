import './LandingPage.css'
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import topSectionImg from '../../images/home-page-img.png';
import secondSectionImg from '../../images/home-page-img-2.png';

const LandingPage = ({ setPageTitle }) => {
  const [examType, setExamType] = useState(null)

  useEffect(() => {
    setPageTitle('Dyno Book')
  }, [])

  return (
    <div className="LandingPage">
      <section className="container mx-auto px-3 xm:px-0">
        <div className="flex flex-col items-start -space-y-5 mt-8 sm:items-end sm:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl font-medium mb-6 xs:text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:font-semibold xl:font-bold">
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
        </div>
      </section>
    </div>
  );
};

export default LandingPage;