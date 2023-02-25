import { useState } from "react";
import { getTotalAmount, getShippingFee } from "../../app/reducers/cartSlice";

// user slice imports go here

import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

const CartTotals = () => {
  // mock user state
  const [myUser, setMyUser] = useState<boolean>(false);

  const totalAmount = useSelector(getTotalAmount);
  const shippingFee = useSelector(getShippingFee);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section>
      <article>
        <h5>
          Subtotal : <span>{formatPrice(totalAmount)}</span>{" "}
        </h5>

        <p className="">
          Shipping fee : <span>{formatPrice(shippingFee)}</span>
        </p>

        <hr className="" />

        <h4 className="">
          Order total : <span>{formatPrice(totalAmount + shippingFee)}</span>
        </h4>
      </article>

      <button>
        <Link to="/checkout" className="btn">
          Go to checkout
        </Link>
      </button>
    </section>
  );
};

export default CartTotals;
