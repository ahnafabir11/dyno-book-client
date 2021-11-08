import "./Header.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ExamTypeContext } from "../../App";
import { IconButton, Typography, Button, Drawer, List } from "@mui/material";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import UniversityListItem from "../UniversityListItem/UniversityListItem";

const Header = () => {
  const [examType] = useContext(ExamTypeContext)
  const [openVersityDrawer, setOpenVersityDrawer] = useState(false)

  return (
    <nav className="h-14">
      <div className="bg-white flex items-center border-b fixed w-full z-10 h-14">
        {
          examType === "admission_test" && 
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mx: { xs: 0, md: 2 } }}
            onClick={() => setOpenVersityDrawer(true)}
          >
            <MdOutlineMapsHomeWork color="#000" />
          </IconButton>
        }

        <Typography
          noWrap
          variant="h6"
          component="div"
          sx={{ ml: 2, textAlign: { xs: 'center', sm: 'left' }, flex: 1 }}
        >
          <Link to="/">DYNO BOOK</Link>
        </Typography>

        <input
          type="text"
          placeholder="Search Question"
          className="hearder_search_box"
        />

        <Link to="/about" className="text-blue-500 font-medium mr-4">About Us</Link>

        <div className="hidden">
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
          <UniversityListItem />
          <UniversityListItem />
          <UniversityListItem />
          <UniversityListItem />
          <UniversityListItem />
        </List>
      </Drawer>
    </nav>
  );
};

export default Header;