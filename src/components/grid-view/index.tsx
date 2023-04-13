import React from "react";
import { GridViewTypes } from "../types";

const Product = React.lazy(() => import("../../components/product"));

const GridView = ({ products }: GridViewTypes) => {
  return (
    <div
      className="products-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GridView;
