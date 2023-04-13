import React from "react";
import { getSimilarProducts } from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";

const Product = React.lazy(() => import("../../components/product"));

const SimilarProducts = () => {
  const products = useSelector(getSimilarProducts);
  return (
    <>
      <div>SimilarProducts</div>

      <div style={{ display: "flex" }}>
        {products.map((product) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default SimilarProducts;
