import { CartProductType } from "../../app/types";
import { formatPrice } from "../../utils/helpers";
import { FaTrash } from "react-icons/fa";
import AmountButtons from "../amount-buttons/index";
import { removeItem, toggleAmount } from "../../app/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const CartItem = (item: CartProductType) => {
  const { id, image, name, color, price, amount } = item;
  const dispatch = useDispatch<AppDispatch>();

  // increase and decrease amount functions
  const increaseAmount = () => {
    dispatch(toggleAmount({ id, value: "increase" }));
  };

  const decreaseAmount = () => {
    dispatch(toggleAmount({ id, value: "decrease" }));
  };

  return (
    <div className="" style={{ display: "flex", padding: "5px 0" }}>
      {/* item */}
      <div className="" style={{ width: "150px", display: "flex" }}>
        <div className="">
          <img src={image} alt={name} className="" width="50px" />
        </div>

        <div>
          <div className="">
            <h5 className="">{name}</h5>
          </div>

          <div className="">
            <div className="">color : </div>
            <div
              className=""
              style={{
                marginRight: "5px",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                backgroundColor: color,
                border: "none",
                color: "white",
              }}
            ></div>
          </div>

          <div className="">
            {/* this price is visible only on small screens */}
            <p className="">{formatPrice(price)}</p>
          </div>
        </div>
      </div>
      {/* end of item */}

      {/* price */}
      <div className="" style={{ width: "150px" }}>
        <p className="">{formatPrice(price)}</p>
      </div>
      {/* end of price */}

      {/* amount buttons */}
      <div className="" style={{ width: "150px" }}>
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />
      </div>
      {/* end of amount buttons */}

      {/* subtotal */}
      <div className="" style={{ width: "150px" }}>
        <h5 className="">{formatPrice(price * amount)}</h5>
      </div>
      {/* end of subtotal */}

      {/* remove button */}
      <div className="" style={{ width: "150px" }}>
        <button className="" onClick={() => dispatch(removeItem(id))}>
          <FaTrash className="" />
        </button>
      </div>
      {/* end of remove button */}
    </div>
  );
};

export default CartItem;
