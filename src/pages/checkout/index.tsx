import "./index.scss";
import PageHero from "../../components/page-hero";
import StripeCheckout from "../../components/stripe-checkout";
import { useSelector } from "react-redux";
import { getCart } from "../../app/reducers/cartSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector(getCart);

  return (
    <section>
      <PageHero title="checkout" />

      <div className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <button>
              <Link to="/products">Shop now</Link>
            </button>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </div>
    </section>
  );
};

export default Checkout;
