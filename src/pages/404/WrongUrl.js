import "./WrongUrl.css";
import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import errorImg from "../../images/page-not-found-img.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

const WrongUrl = ({ setPageTitle }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setPageTitle("Page Not Found");
  }, []);

  return (
    <div className="WrongUrl text-center">
      <Container fixed>
        <img src={errorImg} alt="" />
        <h1>404 - PAGE NOT FOUND</h1>
        <p>The page you are looking for might have been removed <br/> had it's name changed or is temporarily unavailable</p>
        <Button onClick={() => navigate('/')}variant="contained">
          GO TO HOMEPAGE
        </Button>
      </Container>
    </div>
  );
};

export default WrongUrl;
