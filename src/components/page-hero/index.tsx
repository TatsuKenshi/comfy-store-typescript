import React from "react";
import { Link } from "react-router-dom";
import { PageHeroTypes } from "../types";

const PageHero = ({ title }: PageHeroTypes) => {
  return (
    <div>
      <div>
        <h3>
          <Link to="/">Home</Link> / {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
