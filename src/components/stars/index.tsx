import React from "react";
import { StarsTypes } from "../types";

const Stars = (stars: StarsTypes) => {
  return <div>{stars.stars}</div>;
};

export default Stars;
