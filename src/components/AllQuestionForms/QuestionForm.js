import React from 'react';
import { TextField } from '@mui/material';

const QuestionForm = (props) => {
  const {
    questionPassage, setQuestionPassage,
    question, setQuestion,
  } = props;
  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Question & Passage</h2>

      <div className="flex flex-col gap-3">
        <TextField
          multiline
          minRows={2}
          value={questionPassage}
          label="Passage (optional)"
          onChange={(e) => setQuestionPassage(e.target.value)}
        />

        <TextField
          multiline
          fullWidth
          size="small"
          value={question}
          label="Question"
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

    </div>
  );
};

export default QuestionForm;