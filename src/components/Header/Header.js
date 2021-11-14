import "./Header.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ExamTypeContext } from "../../App";
import { LoggedInUser } from './../../App';
import { IconButton, Typography } from "@mui/material";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import HeaderDrawer from '../../components/HeaderDrawer/HeaderDrawer';

const Header = () => {
  const [examType] = useContext(ExamTypeContext)
  const [loggedInUser] = useContext(LoggedInUser)

  const [openVersityDrawer, setOpenVersityDrawer] = useState(false)
  const [openVersityListDrawer, setOpenVersityListDrawer] = useState(false)

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

        {
          loggedInUser._id &&
          <>
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              onClick={() => setOpenVersityListDrawer(true)}
              sx={{ mr: { xs: 0, md: 2 } }}
            >
              <FiEdit color="#000" />
            </IconButton>
          </>
        }
      </div>

      {/* Question Versity Drawer (all) */}
      <HeaderDrawer
        type="question"
        drawerOpen={openVersityDrawer}
        setDrawerOpen={setOpenVersityDrawer}

      />


      {/* Edit Versity Drawer (admin) */}
      <HeaderDrawer
        type="edit"
        drawerOpen={openVersityListDrawer}
        setDrawerOpen={setOpenVersityListDrawer}

      />

    </nav>
  );
};

export default Header;