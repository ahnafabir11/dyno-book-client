import './Header.css';
import React from 'react';
import { IconButton, Typography, Button } from '@mui/material';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { ImSortNumbericDesc } from 'react-icons/im';

const Header = () => {

  return (
    <div className="Header">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mx: { xs: 0, md: 2 } }}
      >
        <MdOutlineMapsHomeWork color="#000" />
      </IconButton>

      <Typography
        noWrap
        variant="h6"
        component="div"
        sx={{ display: { xs: 'none', sm: 'block' } }}
      >
        DYNO BOOK
      </Typography>

      <input
        type="text"
        placeholder="Search Question"
        className="hearder_search_box"
      />

      <Button variant='contained'>
        <Typography noWrap>add new question</Typography>
      </Button>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mx: { xs: 0, md: 2 } }}
      >
        <ImSortNumbericDesc />
      </IconButton>
    </div>
  );
};

export default Header;



