import './LandingPage.css'
import React, { useEffect } from 'react';
import topSectionImg from '../../images/home-page-img.png';
import secondSectionImg from '../../images/home-page-img-2.png';

const LandingPage = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle('Dyno Book')
  }, [])

  return (
    <div className="LandingPage">
        <h1 className="text-4xl text-center">Home Page</h1>
    </div>
  );
};

export default LandingPage;