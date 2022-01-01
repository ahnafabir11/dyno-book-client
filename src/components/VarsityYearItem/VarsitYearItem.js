import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ListItemButton, Collapse, List, ListItemText } from '@mui/material';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const VarsitYearItem = ({ year, varsity, setDrawerOpen }) => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const showQuestions = (name, year, unit) => {
    navigate(`/question/${name}/${year}/${unit}`)
    setDrawerOpen(false)
  }
  return (
    <div>
      <ListItemButton
        key={year._id}
        onClick={() => setOpen(!open)}
      >
        
        <ListItemText>{year.start} - {year.end}</ListItemText>
        <div className="ml-2">
          {open ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }}>
          {
            year.units.map(unit =>
              <ListItemButton
                key={unit._id}
                onClick={() => showQuestions(varsity.name, `${year.start}-${year.end}`, unit.code)}
              >
                <span className="uppercase">{unit.code}</span>
              </ListItemButton>
            )
          }
        </List>
      </Collapse>
    </div>
  );
};

export default VarsitYearItem;