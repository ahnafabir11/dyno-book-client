import './AboutUs.css'
import React, { useEffect } from 'react';

const AboutUs = ({setPageTitle}) => {
  useEffect(() => {
    setPageTitle("About Us | Dyno Book")
  }, [])

  return (
    <div className="AboutUs">
      <h1 className="text-center">About Us Page</h1>
    </div>
  );
};

export default AboutUs;