import { ListViewTypes } from "../types";
import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";

const ListView = ({ products }: ListViewTypes) => {
  return (
    <div>
      {products.map((product) => {
        const { id, image, name, price, description } = product;

        return (
          <article key={id} className="">
            <div className="">
              <img
                src={image}
                alt={name}
                className=""
                width="200px"
                height="140px"
              />
            </div>

            <div className="">
              <h4 className="">{name}</h4>
              <h5 className="">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <button className="">
                <Link to={`/products/${id}`} className="">
                  Details
                </Link>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ListView;
