import React from "react";
import {
  getFeaturedProducts,
  getAllProductsLoading,
  getAllProductsError,
} from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";
import { ProductType } from "../../app/types";
import { Link } from "react-router-dom";

const Product = React.lazy(() => import("../../components/product"));
const Loading = React.lazy(() => import("../../components/loading"));
const ErrorComponent = React.lazy(() => import("../../components/error"));

const FeaturedProducts = () => {
  const products = useSelector(getFeaturedProducts);
  const productsLoading = useSelector(getAllProductsLoading);
  const productsError = useSelector(getAllProductsError);

  if (productsLoading) {
    return <Loading />;
  }

  if (productsError) {
    return <ErrorComponent />;
  }

  return (
    <div className="section">
      <div className="title">
        <h2>Featured Products</h2>

        <div className="underline"></div>

        <div className="section-center featured" style={{ display: "flex" }}>
          {products.map((product: ProductType) => {
            return <Product {...product} key={product.id} />;
          })}
        </div>
        <button>
          <Link to="/products" className="btn">
            All Products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
