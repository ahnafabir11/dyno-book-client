import './WrongUrl.css'
import React, { useEffect } from 'react';
import Container from '@mui/material/Container'
import errorImg from '../../images/page-not-found-img.png';

const WrongUrl = ({setPageTitle}) => {
  useEffect(() => {
    setPageTitle("Page Not Found")
  }, [])

  return (
    <div className="WrongUrl">
      <Container fixed>
        <h1 className="text-center">404 page not found</h1>
      </Container>
    </div>
  );
};

export default WrongUrl;