import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoggedInUser } from '../../App';


const PrivateRoute = ({ children }) => {
  const [loggedInUser] = useContext(LoggedInUser)

  return loggedInUser._id ? children : <Navigate to="/ad-login" />;
};

export default PrivateRoute;