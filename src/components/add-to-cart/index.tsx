import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { AddToCartTypes } from "../types";
import { addToCart } from "../../app/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";

const AmountButtons = React.lazy(
  () => import("../../components/amount-buttons")
);

const AddToCart = ({ product }: AddToCartTypes) => {
  // cartSlice variables for dispatching addToCart action
  const dispatch = useDispatch<AppDispatch>();

  // destructure product id, stock, and colors
  const { id, stock, colors } = product;

  // states for the main/chosen color and the amount/number of items
  // the color state has the string type because the colors array on the SingleProductType is a string[]
  // the amount state has the number type because the amount prop on the SingleProduct type is a number
  const [mainColor, setMainColor] = useState<string>(colors[0]);
  const [amount, setAmount] = useState<number>(1);

  // amount increase and decrease functions
  const increaseAmount = () => {
    setAmount((previousAmount) => {
      let newAmount = previousAmount + 1;
      if (newAmount > stock) {
        newAmount = stock;
      }
      return newAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((previousAmount) => {
      let newAmount = previousAmount - 1;
      if (newAmount < 1) {
        newAmount = 1;
      }
      return newAmount;
    });
  };

  return (
    <div>
      {/* colors */}
      <div className="colors">
        <span style={{ display: "flex" }}>
          {" "}
          colors :
          <div style={{ display: "flex", marginLeft: "5px" }}>
            {colors.map((color, index) => {
              return (
                <button
                  key={index}
                  style={{
                    marginRight: "5px",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    backgroundColor: color,
                    border: "none",
                    color: "white",
                  }}
                  className={`${
                    mainColor === color ? "color-btn active" : "color-btn"
                  }`}
                  onClick={() => {
                    setMainColor(color);
                  }}
                >
                  {" "}
                  {mainColor === color ? (
                    <FaCheck className="text-white text-center" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </span>
      </div>

      {/* amount buttons */}
      <div className="btn-container">
        <AmountButtons
          amount={amount}
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
        />

        <button
          onClick={() =>
            dispatch(addToCart({ id, amount, mainColor, product }))
          }
        >
          <Link to="/cart" className="btn">
            Add to Cart
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
