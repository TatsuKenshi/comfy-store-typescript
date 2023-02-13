import { getFeaturedProducts } from "../../app/reducers/productsSlice";
import { useSelector } from "react-redux";

const FeaturedProducts = () => {
  const prods = useSelector(getFeaturedProducts);

  return (
    <div>
      FeaturedProducts
      {prods.map((prod: {}, index: number) => {
        return <span key={index}>{index}</span>;
      })}
    </div>
  );
};

export default FeaturedProducts;
