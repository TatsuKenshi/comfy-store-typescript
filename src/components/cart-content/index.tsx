import React from "react";
import { getCart, clearCart } from "../../app/reducers/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { Link } from "react-router-dom";

const CartColumns = React.lazy(() => import("../../components/cart-columns"));
const CartItem = React.lazy(() => import("../../components/cart-item"));
const CartTotals = React.lazy(() => import("../../components/cart-totals"));

const CartContent = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="section section-center">
      <CartColumns />

      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <hr />

      <div className="link-container">
        <button>
          <Link to="/products" className="link-btn">
            Shop More
          </Link>
        </button>

        <button
          type="button"
          className="link-btn clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
      </div>

      <div>
        <CartTotals />
      </div>
    </section>
  );
};

export default CartContent;
