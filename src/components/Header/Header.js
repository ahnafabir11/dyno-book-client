import "./Header.css";
import React, { useState } from "react";
import { IconButton, Typography, Button, Drawer } from "@mui/material";
import { Box, List, ListItem } from "@mui/material";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { ImSortNumbericDesc } from "react-icons/im";
import { Link } from "react-router-dom";

const Header = () => {
  const [openVersityDrawer, setOpenVersityDrawer] = useState(false);
  const [openYearDrawer, setOpenYearDrawer] = useState(false);

  return (
    <nav className="h-1">
      <div className="bg-white flex items-center border-b border-gray fixed w-full">
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

        <Typography noWrap variant="h6" component="div" sx={{ ml: 1 }}>
          <Link to="/" className="text-decoration-none text-black">
            DYNO BOOK
          </Link>
        </Typography>

        <Box flexGrow="1" />

        <input
          type="text"
          placeholder="Search Question"
          className="hearder_search_box"
        />

        <Button variant="contained">
          <Typography noWrap>add new question</Typography>
        </Button>

        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mx: { xs: 0, md: 2 } }}
          onClick={() => setOpenYearDrawer(true)}
        >
          <ImSortNumbericDesc />
        </IconButton>
      </div>

      {/* Versity Drawer */}
      <Drawer
        anchor="left"
        open={openVersityDrawer}
        onClose={() => setOpenVersityDrawer(false)}
      >
        <h6 className="text-center py-2">List Of Univerisies</h6>
        <List
          style={{ minWidth: "230px" }}
          onClick={() => setOpenVersityDrawer(false)}
        >
          <ListItem button>Chittagong University</ListItem>
          <ListItem button>Comilla University</ListItem>
          <ListItem button>Dahaka University</ListItem>
          <ListItem button>Rajshahi University</ListItem>
          <ListItem button>Shajalal University</ListItem>
        </List>
      </Drawer>

      {/* Academic Year Drawer */}
      <Drawer
        anchor="right"
        open={openYearDrawer}
        onClose={() => setOpenYearDrawer(false)}
      >
        <h6 className="text-center py-2">Academic Year</h6>
        <List
          style={{ minWidth: "230px" }}
          onClick={() => setOpenYearDrawer(false)}
        >
          <ListItem button>2020 - 2021</ListItem>
          <ListItem button>2019 - 2020</ListItem>
          <ListItem button>2018 - 2019</ListItem>
          <ListItem button>2017 - 2018</ListItem>
          <ListItem button>2016 - 2017</ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default Header;
