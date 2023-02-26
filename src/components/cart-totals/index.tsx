import { getTotalAmount, getShippingFee } from "../../app/reducers/cartSlice";
import { useSelector } from "react-redux";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user-context/UserContext";
import { UserContextType } from "../../context/user-context/UserContext";

const CartTotals = () => {
  const totalAmount = useSelector(getTotalAmount);
  const shippingFee = useSelector(getShippingFee);
  const { myUser, loginWithRedirect } = useUserContext() as UserContextType;

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

      {myUser ? (
        <button>
          <Link to="/checkout" className="btn">
            Go to checkout
          </Link>
        </button>
      ) : (
        <button type="button" onClick={loginWithRedirect}>
          Log in
        </button>
      )}
    </section>
  );
};

export default CartTotals;
