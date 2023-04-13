import React from "react";
import "./index.scss";
import StripeCheckout from "../../components/stripe-checkout";
import PageHero from "../../components/page-hero";
import { useSelector } from "react-redux";
import { getCart } from "../../app/reducers/cartSlice";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

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
      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "black", textAlign: "center" }}
        buttonStyle={{
          color: "black",
          background: "green",
          borderRadius: "20px",
          fontSize: "1rem",
        }}
        buttonText="Alright!"
        expires={1}
      >
        This Site Uses Cookies. Check out our{" "}
        <a href="/about">privacy policy</a> for more info.
      </CookieConsent>
    </section>
  );
};

export default Checkout;
