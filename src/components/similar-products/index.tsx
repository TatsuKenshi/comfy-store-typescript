import React from "react";
import { Link } from "react-router-dom";
import { getSimilarProducts } from "../../app/reducers/productsSlice";
import { ProductType } from "../../app/types";
import Product from "../product";
import { useSelector } from "react-redux";

const SimilarProducts = () => {
  const products = useSelector(getSimilarProducts);
  return (
    <>
      <div>SimilarProducts</div>
      {products.map((product) => {
        return <Product {...product} key={product.id} />;
      })}
    </>
  );
};

export default SimilarProducts;
