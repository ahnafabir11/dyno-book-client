import React from 'react';
import { TextField } from '@mui/material';

const ExplanationForm = (props) => {
  const {
    explainBan, setExplainBan,
    explainEng, setExplainEng,
  } = props;

  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Explanations</h2>

      <div className="flex flex-col gap-3">
        <TextField
          multiline
          minRows={2}
          value={explainBan}
          label="Bangla Explanation (optional)"
          onChange={(e) => setExplainBan(e.target.value)}
        />

        <TextField
          multiline
          minRows={2}
          value={explainEng}
          label="English Explanation (optional)"
          onChange={(e) => setExplainEng(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ExplanationForm;