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