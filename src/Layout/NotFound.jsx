import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "../UI";
import classes from "./NotFound.module.scss";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleBackBtn = () => {
    navigate("/");
  };
  return (
    <div className={classes.container}>
      <Card>
        <img
          src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?compress=1&resize=800x600&vertical=top"
          alt="Not-Found"
        />
        <Button onClickHandler={handleBackBtn}>Back to Home</Button>
      </Card>
    </div>
  );
};
