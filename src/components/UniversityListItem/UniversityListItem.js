import './UniversityListItem.css';
import React, { useState } from 'react';
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const UniversityListItem = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <ListItemButton onClick={() => setOpen(!open)}>
        <ListItemText>Chittagong Univesity</ListItemText>
        <div className="ml-2">
          {open ? <MdExpandLess /> : <MdExpandMore />}
        </div>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List sx={{ pl: 4 }}>
          <ListItemButton>2020-2021</ListItemButton>
          <ListItemButton>2019-2020</ListItemButton>
          <ListItemButton>2018-2019</ListItemButton>
          <ListItemButton>2017-2018</ListItemButton>
          <ListItemButton>2016-2017</ListItemButton>
          <ListItemButton>2015-2016</ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default UniversityListItem;