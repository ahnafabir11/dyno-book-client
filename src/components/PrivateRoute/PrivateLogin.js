import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { LoggedInUser } from '../../App';


const PrivateLogin = ({ children }) => {
  const [loggedInUser] = useContext(LoggedInUser)

  return loggedInUser._id ? <Navigate to={-1} /> : children;
};

export default PrivateLogin;