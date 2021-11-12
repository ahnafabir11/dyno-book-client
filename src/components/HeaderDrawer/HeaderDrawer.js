import React, { useContext } from 'react';
import { VarsitiesInfo } from '../../App';
import { Drawer, List, Box } from "@mui/material";
import VarsityListItem from '../VarsityListIteam/VarsityListItem';
import AddVarsityForm from '../AddVarsityForm/AddVarsityForm';

const HeaderDrawer = ({ type, drawerOpen, setDrawerOpen }) => {
  const [varsitiesInfo] = useContext(VarsitiesInfo)

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
      {type === "edit" && <AddVarsityForm />}
    </Drawer>
  );
};

export default HeaderDrawer;