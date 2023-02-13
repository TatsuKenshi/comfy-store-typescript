import Product from "../product";
import Loading from "../loading";
import Error from "../error";
import {
  getFeaturedProducts,
  getAllProductsLoading,
  getAllProductsError,
} from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";
import { ProductType } from "../../app/types";

const FeaturedProducts = () => {
  const products = useSelector(getFeaturedProducts);
  const productsLoading = useSelector(getAllProductsLoading);
  const productsError = useSelector(getAllProductsError);

  if (productsLoading) {
    return <Loading />;
  }

  if (productsError) {
    return <Error />;
  }

  return (
    <div className="section">
      <div className="title">
        <h2>Featured Products</h2>

        <div className="underline"></div>

        <div className="section-center featured">
          {products.map((product: ProductType) => {
            return <Product {...product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
