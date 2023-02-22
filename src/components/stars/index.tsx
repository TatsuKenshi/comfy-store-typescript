import { StarsTypes } from "../types";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }: StarsTypes) => {
  return (
    <div className="" style={{ display: "inline-flex" }}>
      <div className="" style={{ color: "gold", marginRight: "20px" }}>
        {/* star */}
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}

        {/* star */}
        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}

        {/* star */}
        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}

        {/* star */}
        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}

        {/* star */}
        <span>
          {stars >= 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        {/* end of star */}
      </div>

      {/* number of reviews */}
      <div>
        <p>({reviews} customer reviews)</p>
      </div>
    </div>
  );
};

export default Stars;
