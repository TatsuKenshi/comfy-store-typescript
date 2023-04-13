import React from "react";
import {
  getFilteredProducts,
  getGridView,
} from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";

const GridView = React.lazy(() => import("../../components/grid-view"));
const ListView = React.lazy(() => import("../../components/list-view"));

const ProductsList = () => {
  const products = useSelector(getFilteredProducts);
  const gridView = useSelector(getGridView);

  if (products.length < 1) {
    return (
      <section className="">
        <h5 className="">Sorry, no products match your search...</h5>
      </section>
    );
  }

  if (!gridView) {
    return (
      <section>
        <ListView products={products} />
      </section>
    );
  }

  return (
    <section>
      <GridView products={products} />
    </section>
  );
};

export default ProductsList;
