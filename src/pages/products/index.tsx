import "./index.scss";
import {
  getAllProducts,
  getAllProductsLoading,
  getAllProductsError,
} from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";
import Product from "../../components/product";
import { ProductType } from "../../app/types";

const Products = () => {
  const products = useSelector(getAllProducts);
  const productsLoading = useSelector(getAllProductsLoading);
  const productsError = useSelector(getAllProductsError);

  if (productsLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (productsError) {
    return (
      <div>
        <h1>There was an error...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Products</h1>
      <div>
        {products.map((product: ProductType) => {
          return <Product {...product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
