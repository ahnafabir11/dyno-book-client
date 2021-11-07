import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Typography, Button, Drawer } from "@mui/material";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

const Header = () => {
  const [openVersityDrawer, setOpenVersityDrawer] = useState(false)
  const [open, setOpen] = useState(false)

  return (
    <nav className="h-14">
      <div className="bg-white flex items-center border-b border-gray fixed w-full z-10">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mx: { xs: 0, md: 2 } }}
          onClick={() => setOpenVersityDrawer(true)}
        >
          <MdOutlineMapsHomeWork color="#000" />
        </IconButton>

        <Typography noWrap variant="h6" component="div" sx={{ ml: 1, textAlign: { xs: 'center', sm: 'left' }, flex: 1 }}>
          <Link to="/" className="text-decoration-none text-black">
            DYNO BOOK
          </Link>
        </Typography>


        <input
          type="text"
          placeholder="Search Question"
          className="hearder_search_box"
        />

        <div className="hidden sm:block">
          <Button variant="contained">
            <Typography noWrap>add new question</Typography>
          </Button>
        </div>
      </div>

      {/* Versity Drawer */}
      <Drawer
        anchor="left"
        open={openVersityDrawer}
        onClose={() => setOpenVersityDrawer(false)}
      >
        <h6 className="h-14 font-bold border-b flex items-center justify-center">List Of Universities</h6>
        <List>
          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>Chittagong University</ListItemText>
            <div className="ml-2">{open ? <MdExpandLess /> : <MdExpandMore />}</div>
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List className="text-right">
              <ListItemButton>2020-2021</ListItemButton>
              <ListItemButton>2019-2020</ListItemButton>
              <ListItemButton>2018-2019</ListItemButton>
              <ListItemButton>2017-2018</ListItemButton>
              <ListItemButton>2016-2017</ListItemButton>
              <ListItemButton>2015-2016</ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>Comilla University</ListItemText>
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List className="text-right">
              <ListItemButton>2020-2021</ListItemButton>
              <ListItemButton>2019-2020</ListItemButton>
              <ListItemButton>2018-2019</ListItemButton>
              <ListItemButton>2017-2018</ListItemButton>
              <ListItemButton>2016-2017</ListItemButton>
              <ListItemButton>2015-2016</ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>Dhaka University</ListItemText>
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List className="text-right">
              <ListItemButton>2020-2021</ListItemButton>
              <ListItemButton>2019-2020</ListItemButton>
              <ListItemButton>2018-2019</ListItemButton>
              <ListItemButton>2017-2018</ListItemButton>
              <ListItemButton>2016-2017</ListItemButton>
              <ListItemButton>2015-2016</ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>Rajshahi University</ListItemText>
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List className="text-right">
              <ListItemButton>2020-2021</ListItemButton>
              <ListItemButton>2019-2020</ListItemButton>
              <ListItemButton>2018-2019</ListItemButton>
              <ListItemButton>2017-2018</ListItemButton>
              <ListItemButton>2016-2017</ListItemButton>
              <ListItemButton>2015-2016</ListItemButton>
            </List>
          </Collapse>

          <ListItemButton onClick={() => setOpen(!open)}>
            <ListItemText>Sha Jalal University</ListItemText>
            {open ? <MdExpandLess /> : <MdExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List className="text-right">
              <ListItemButton>2020-2021</ListItemButton>
              <ListItemButton>2019-2020</ListItemButton>
              <ListItemButton>2018-2019</ListItemButton>
              <ListItemButton>2017-2018</ListItemButton>
              <ListItemButton>2016-2017</ListItemButton>
              <ListItemButton>2015-2016</ListItemButton>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </nav>
  );
};

export default Header;
