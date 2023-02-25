import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalItems } from "../../app/reducers/cartSlice";

const CartButtons = () => {
  const items = useSelector(getTotalItems);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "relative", marginRight: "0.5rem" }}>
        <div style={{ width: "40px" }}>
          <NavLink to="/cart">
            <FaShoppingCart
              style={{ width: "30px", height: "30px", color: "slateGray" }}
            />
          </NavLink>
        </div>
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            backgroundColor: "red",
            color: "white",
            padding: "0.2rem 0.3rem",
            borderRadius: "50%",
            fontSize: "0.75rem",
          }}
        >
          {items}
        </div>
      </div>
      <div>
        <button
          style={{
            border: "none",
            background: "none",
            fontSize: "1.5rem",
            display: "flex",
            alignItems: "center",
          }}
        >
          Login{" "}
          <FaUserPlus
            style={{
              width: "30px",
              height: "30px",
              color: "slateGray",
              marginLeft: "0.2rem",
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default CartButtons;
