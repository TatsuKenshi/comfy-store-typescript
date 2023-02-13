import "./index.scss";
import { getAllProducts } from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";

const Products = () => {
  const prods = useSelector(getAllProducts);

  return (
    <div>
      Products
      <div>
        {prods.map((prod: {}, index: number) => {
          return <span key={index}>{index}</span>;
        })}
      </div>
    </div>
  );
};

export default Products;
