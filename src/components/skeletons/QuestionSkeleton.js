import React from 'react';
import { Skeleton } from '@mui/material';

const QuestionSkeleton = () => {
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="text" sx={{width: "80%"}}/>
      <div className="max-w-xs my-3">
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
      <Skeleton variant="rectangular" height={40} />

    </div>
  );
};

export default QuestionSkeleton;