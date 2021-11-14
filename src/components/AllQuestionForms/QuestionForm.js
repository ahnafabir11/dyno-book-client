import React from 'react';
import { TextField } from '@mui/material';

const QuestionForm = (props) => {
  const {
    questionBan, setQuestionBan,
    questionEng, setQuestionEng,
    questionBng, setQuestionBng
  } = props;
  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">University Information</h2>

      <div className="flex flex-col gap-3">
        <TextField
          required
          fullWidth
          size="small"
          value={questionBan}
          label="question in bangla"
          onChange={(e)=> setQuestionBan(e.target.value)}
        />

        <TextField
          fullWidth
          size="small"
          value={questionEng}
          label="question in english (optional)"
          onChange={(e) => setQuestionEng(e.target.value)}
        />

        <TextField
          fullWidth
          size="small"
          value={questionBng}
          label="question in banglish (optional)"
          onChange={(e) => setQuestionBng(e.target.value)}
        />
      </div>

    </div>
  );
};

export default QuestionForm;