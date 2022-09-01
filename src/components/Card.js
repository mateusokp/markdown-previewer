import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return props.light ? (
    <div className={`${classes.light}`}>{props.children}</div>
  ) : (
    <div className={`${classes.card}`}>{props.children}</div>
  );
};

export default Card;
