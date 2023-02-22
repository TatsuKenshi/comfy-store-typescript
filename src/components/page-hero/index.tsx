import React from "react";
import { Link } from "react-router-dom";
import { PageHeroTypes } from "../types";
import { capitalizeTitle } from "../../utils/helpers";

const PageHero = ({ title, product }: PageHeroTypes) => {
  return (
    <div>
      <div>
        <h3 className="">
          <Link to="/" className="">
            Home
          </Link>{" "}
          {product && (
            <Link to="/products" className="">
              / Products{" "}
            </Link>
          )}
          / {title && capitalizeTitle(title)}
        </h3>
      </div>
    </div>
  );
};

export default PageHero;
