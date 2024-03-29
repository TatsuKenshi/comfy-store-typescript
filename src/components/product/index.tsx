import { ProductType } from "../../app/types";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { formatPrice } from "../../utils/helpers";

const Product = (product: ProductType) => {
  const { image, name, price, id } = product;

  return (
    <div>
      <div className="container">
        <img src={image} alt={name} height="90px" width="135px" />
        <Link to={`/products/${id}`} className="link">
          <div>
            <FaSearch />
          </div>
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  );
};

export default Product;
