import React, { useEffect } from "react";
import { getCart } from "../../app/reducers/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import usePageTitle from "../../hooks/usePageTitle";
import i18n from "../../translation";
import "./index.scss";

const PageHero = React.lazy(() => import("../../components/page-hero"));
const CartContent = React.lazy(() => import("../../components/cart-content"));

const Cart = () => {
  const cart = useSelector(getCart);

  // page title customization and localization
  const { changeTitle } = usePageTitle();
  const language = i18n.language;

  useEffect(() => {
    changeTitle({ language: language, enTitle: "Cart", srTitle: "Korpa" });
  }, [language, changeTitle]);

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
  }

  return (
    <section className="page-100">
      <PageHero title="Cart" />

      <div className="page">
        <CartContent />
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

export default Cart;
