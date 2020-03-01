import React, { Fragment } from "react";
import spinner from "./spinner.gif";

import "./spinner.css";

const Spinner = () => {
  return (
    <Fragment>
      <img className="spinner" src={spinner} alt="Loading..." />
    </Fragment>
  );
};

export default Spinner;
