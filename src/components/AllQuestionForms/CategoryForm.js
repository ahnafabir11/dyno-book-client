import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const CategoryForm = ({ setCategory }) => {
  const categoryList = [
    { value: 'Bangla' }, 
    { value: 'English' }, 
    { value: 'Accounting' }, 
    { value: 'Management' }, 
    { value: 'Finance' }, 
    { value: 'Marketing' }, 
    { value: 'Physics' }, 
    { value: 'Mathematics' }, 
    { value: 'Biology' }, 
    { value: 'ICT' }, 
    { value: 'GK' }, 
  ]

  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">Category</h2>

      <Autocomplete
        multiple
        size="small"
        options={categoryList}
        getOptionLabel={(option) => option.value}
        filterSelectedOptions
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Category"
          />
        )}
        onChange={(e, value) => setCategory(value)}
      />
    </div>
  );
};

export default CategoryForm;