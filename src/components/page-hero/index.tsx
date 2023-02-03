import React from "react";
import { PageHeroTypes } from "../types";

const PageHero = (props: PageHeroTypes) => {
  return (
    <div>
      <div>Home / {props.title}</div>
    </div>
  );
};

export default PageHero;
