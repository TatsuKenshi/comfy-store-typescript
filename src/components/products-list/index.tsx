import GridView from "../grid-view";
import ListView from "../list-view";
import {
  getFilteredProducts,
  getGridView,
} from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";

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
