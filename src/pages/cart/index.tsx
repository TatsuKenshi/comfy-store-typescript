import { useEffect } from "react";
import { getCart, countCartTotals } from "../../app/reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import { Link } from "react-router-dom";
import PageHero from "../../components/page-hero";
import CartContent from "../../components/cart-content";
import "./index.scss";

const Cart = () => {
  const cart = useSelector(getCart);
  const dispatch = useDispatch<AppDispatch>();

  // useEffect updates the cart state in localStorage
  // dispatches countCartTotals (calculates total_amount, total_items)
  // whenever the cart array (CartProductType[]) changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(countCartTotals());
  }, [dispatch, cart]);

  if (cart.length < 1) {
    return (
      <section className="page-100">
        <PageHero title="Cart" />

        <div className="empty">
          <h2>Your cart is empty...</h2>
        </div>

        <Link to="/products" className="">
          <button className="">Start Shopping</button>
        </Link>
      </section>
    );
  }

  return (
    <section className="page-100">
      <PageHero title="Cart" />

      <div className="page">
        <CartContent />
      </div>
    </section>
  );
};

export default Cart;
