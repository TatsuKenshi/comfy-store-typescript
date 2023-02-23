import { GridViewTypes } from "../types";
import Product from "../product";

const GridView = ({ products }: GridViewTypes) => {
  return (
    <div
      className="products-container"
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default GridView;
