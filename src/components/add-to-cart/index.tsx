import React from "react";
import { AddToCartTypes } from "../types";

const AddToCart = ({ product }: AddToCartTypes) => {
  const colors = product.colors;
  console.log(colors);
  return (
    <div style={{ display: "flex" }}>
      <h5 style={{ marginRight: "5px" }}>AddToCart</h5>
      {/* {colors.map((color, index) => {
        return (
          <span key={index} style={{ marginRight: "5px" }}>
            {color}
          </span>
        );
      })} */}
    </div>
  );
};

export default AddToCart;
