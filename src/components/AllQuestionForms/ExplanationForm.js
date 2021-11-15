import React from 'react';
import { TextField } from '@mui/material';

const ExplanationForm = ({ explanation, setExplanation }) => {

  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Explanation</h2>

      <div className="flex flex-col gap-3">
        <TextField
          multiline
          minRows={2}
          value={explanation}
          label="Explanation"
          onChange={(e) => setExplanation(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExplanationForm;