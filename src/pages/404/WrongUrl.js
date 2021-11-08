import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { PageTitle } from "../../App";
import Button from "@mui/material/Button";
import errorImg from "../../images/page-not-found-img.png";

const WrongUrl = () => {
  const navigate = useNavigate()
  const [,setPageTitle] = useContext(PageTitle)

  useEffect(() => {
    setPageTitle("Page Not Found")
  }, [])

  return (
    <div className="WrongUrl">
      <div className="container px-3 mx-auto my-20">
        <div className="max-w-lg mx-auto space-y-1 text-center xs:space-y-2 sm:space-y-3">
          <img src={errorImg} alt="dyno book 404 not found page" />
          <h1 className="text-xl font-medium xs:text-3xl xs:font-bold sm:text-4xl">404 - PAGE NOT FOUND</h1>
          <p className="text-xs leading-tight xs:text-sm sm:text-base">The page you are looking for might have been removed <br />
            had it's name changed or is temporarily unavailable</p>
          <Button
            size="small"
            onClick={() => navigate("/")}
            variant="outlined"
          >
            home page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WrongUrl;
