import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { VarsitiesInfo } from '../../App';
import { Drawer, List, Box, Button } from "@mui/material";
import VarsityListItem from '../VarsityListIteam/VarsityListItem';
import AddVarsityForm from '../AddVarsityForm/AddVarsityForm';

const HeaderDrawer = ({ type, drawerOpen, setDrawerOpen }) => {
  const navigate = useNavigate()

  const [varsitiesInfo] = useContext(VarsitiesInfo)

  const addQuestion = () => {
    navigate('/questions/create')
    setDrawerOpen(false)
  }

  return (
    <Drawer
      anchor={type === "edit" ? 'right' : 'left'}
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <h6 className="h-14 font-bold border-b flex items-center justify-center">University List</h6>
      <List>
        <Box sx={{ minWidth: 300 }} />
        {
          varsitiesInfo.map(varsity =>
            <VarsityListItem
              key={varsity._id}
              type={type}
              varsity={varsity}
              setDrawerOpen={setDrawerOpen}
            />
          )
        }
      </List>
      {type === "edit" &&
        <div className="flex flex-col gap-2 p-3 border-t-2">
          <AddVarsityForm />
          <Button
            color="secondary"
            variant="contained"
            onClick={addQuestion}
          >
            add new question
          </Button>
        </div>
      }
    </Drawer>
  );
};

export default HeaderDrawer;