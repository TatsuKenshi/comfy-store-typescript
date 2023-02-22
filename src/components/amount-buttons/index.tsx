import { AmountButtonsTypes } from "../types";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({
  amount,
  increaseAmount,
  decreaseAmount,
}: AmountButtonsTypes) => {
  return (
    <div className="amount-btns" style={{ display: "flex" }}>
      <button onClick={decreaseAmount} className="amount-btn">
        <FaMinus />
      </button>

      <h2 className="amount">{amount}</h2>

      <button onClick={increaseAmount} className="amount-btn">
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
