import { getCart } from "../../app/reducers/cartSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PageHero from "../../components/page-hero";
import CartContent from "../../components/cart-content";
import "./index.scss";
// import { useUserContext } from "../../context/user-context/UserContext";
// import { UserContextType } from "../../context/user-context/UserContext";

const Cart = () => {
  const cart = useSelector(getCart);
  // const { myUser } = useUserContext() as UserContextType;
  // console.log(myUser);

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
