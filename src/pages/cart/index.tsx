import { getCart } from "../../app/reducers/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageHero from "../../components/page-hero";
import CartContent from "../../components/cart-content";
import "./index.scss";

const Cart = () => {
  const cart = useSelector(getCart);

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
