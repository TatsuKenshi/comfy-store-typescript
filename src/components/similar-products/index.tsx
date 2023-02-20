import { getSimilarProducts } from "../../app/reducers/productsSlice";
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
