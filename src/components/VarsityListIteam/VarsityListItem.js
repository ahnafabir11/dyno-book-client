import React, { useState } from 'react';
import { ListItemButton, ListItemText, Collapse, List } from "@mui/material";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const VarsityListItem = ({ varsity, type, setDrawerOpen }) => {
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)

  const editVarsityInfo = (id) => {
    navigate(`/edit/varsity/${id}`)
    setDrawerOpen(false)
  }

  const questionByNameAndYear = (name, year) => {
    const filterValue = {
      varsityName: name,
      accYear: year
    }

    fetch("http://localhost:5000/api/questions/filter", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filterValue)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err.message))
  }

  return (
    <div>
      {
        type === 'question' &&
        <>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>{varsity.name}</ListItemText>
            <div className="ml-2">
              {open ? <MdExpandLess /> : <MdExpandMore />}
            </div>
          </ListItemButton>

          <Collapse in={open} timeout="auto" unmountOnExit>
            <List sx={{ pl: 4 }}>
              {
                varsity.accYear.map(year =>
                  <ListItemButton
                    key={year._id}
                    onClick={()=> questionByNameAndYear(varsity.name, `${year.start}-${year.end}`)}
                  >
                    {year.start} - {year.end}
                  </ListItemButton>
                )
              }
            </List>
          </Collapse>
        </>
      }

      {
        type === 'edit' &&
        <>
          <ListItemButton onClick={() => editVarsityInfo(varsity._id)}>
            {varsity.name}
          </ListItemButton>
        </>
      }
    </div>
  );
};

export default VarsityListItem;