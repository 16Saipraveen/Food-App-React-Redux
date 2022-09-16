import React from "react";
import { ClipLoader } from "react-spinners";
import { Card } from "./Card";
import classes from './Loader.module.scss'

export const Loader = () => {
  const color = "#8a2b06";
  return (
    <div className={classes.loader}>
    <Card>
      <ClipLoader loading size={100} color={color} />
    </Card>
    </div>
  );
};
