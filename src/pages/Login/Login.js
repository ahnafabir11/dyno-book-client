import './Login.css';
import React, { useEffect, useContext } from 'react';
import { PageTitle } from '../../App';

const Login = () => {
  const [,setPageTitle] = useContext(PageTitle)
  useEffect(() => {
    setPageTitle('Login | Dyno Book');
  }, [])

  return (
    <div className="container mx-atuo">
      <h1>This is login page</h1>
    </div>
  );
};

export default Login;