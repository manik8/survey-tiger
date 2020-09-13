import React from "react";
import { Link } from "react-router-dom";

export const Button = (props) => {
  return (
    <Link to={props.link} className="btn-survey">
      {props.text}
    </Link>
  );
};
