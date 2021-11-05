import "./WrongUrl.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import errorImg from "../../images/page-not-found-img.png";
import Button from "@mui/material/Button";

const WrongUrl = ({ setPageTitle }) => {
  const navigate = useNavigate()

  useEffect(() => {
    setPageTitle("Page Not Found")
  }, [])

  return (
    <div className="WrongUrl text-center">
      <img src={errorImg} alt="dyno book 404 not found page" />
      <h1>404 - PAGE NOT FOUND</h1>
      <p className="mb-0">The page you are looking for might have been removed </p>
      <p>had it's name changed or is temporarily unavailable</p>
      <Button onClick={() => navigate("/")} variant="contained">
        GO TO HOMEPAGE
      </Button>
    </div>
  );
};

export default WrongUrl;
