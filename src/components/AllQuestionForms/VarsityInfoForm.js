import React, { useContext } from 'react';
import { VarsitiesInfo } from '../../App';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const VarsityInfoForm = (props) => {
  const {
    varsityName, setVarsityName,
    accYear, setAccYear,
    unit, setUnit,
    varsityYears, varsityUnits
  } = props;
  
  const [varsitiesInfo] = useContext(VarsitiesInfo)

  return (
    <div className="mb-5">
      <h2 className="text-lg mb-3">University Information</h2>
      
      <div className="flex flex-col gap-3 sm:flex-row">
        <FormControl fullWidth>
          <InputLabel>Select University</InputLabel>
          <Select
            required
            value={varsityName}
            label="Select University"
            onChange={(e) => setVarsityName(e.target.value)}
          >
            {
              varsitiesInfo?.map(varsity =>
                <MenuItem
                  key={varsity._id}
                  value={varsity.name}
                >
                  {varsity.name}
                </MenuItem>
              )
            }
          </Select>
        </FormControl>

        {
          varsityName !== "" &&
          <FormControl fullWidth>
            <InputLabel>Select Year</InputLabel>
            <Select
              required
              value={accYear}
              label="Select Year"
              onChange={(e) => setAccYear(e.target.value)}
            >
              {
                varsityYears?.map(year =>
                  <MenuItem
                    key={year._id}
                    value={`${year.start}-${year.end}`}
                  >
                    {year.start} - {year.end}
                  </MenuItem>
                )
              }
            </Select>
          </FormControl>
        }

        {
          accYear !== "" &&
          <FormControl fullWidth>
            <InputLabel>Select Unit</InputLabel>
            <Select
              required
              value={unit}
              label="Select Unit"
              onChange={(e) => setUnit(e.target.value)}
            >
              {
                varsityUnits?.map(unit =>
                  <MenuItem
                    key={unit._id}
                    value={unit.code}
                  >
                    {`${unit.code} (${unit.group})`}
                  </MenuItem>
                )
              }
            </Select>
          </FormControl>
        }
      </div>
    </div>
  );
};

export default VarsityInfoForm;