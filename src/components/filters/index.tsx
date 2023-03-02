import {
  getFilters,
  clearFilters,
  getAllProducts,
} from "../../app/reducers/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getUniqueValues } from "../../utils/helpers";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { formatPrice } from "../../utils/helpers";
import useFilters from "../../hooks/useFilters";
import useResize from "../../hooks/useResize";

const Filters = () => {
  // filtering, screen size, and dispatching functions and variables
  const { myFilters } = useFilters();
  const {
    windowSize,
    expandForm,
    setExpandForm,
    showSearch,
    setShowSearch,
    showCategory,
    setShowCategory,
    showCompany,
    setShowCompany,
    showColor,
    setShowColor,
    showPrice,
    setShowPrice,
    showShipping,
    setShowShipping,
  } = useResize();

  const { text, company, color, min_price, price, max_price, shipping } =
    useSelector(getFilters);
  const dispatch = useDispatch<AppDispatch>();

  // variables for unique categories, colors, and companies for the filter form
  const products = useSelector(getAllProducts);
  const categories = getUniqueValues(products, "category");
  const colors = getUniqueValues(products, "colors");
  const companies = getUniqueValues(products, "company");

  return (
    <section>
      <div className="">
        <h3 className="">Filters</h3>

        {/* main show/hide toggle button */}
        {windowSize < 1025 && (
          <button
            className=""
            onClick={() => {
              if (!expandForm) {
                setExpandForm(true);
              } else {
                setExpandForm(false);
                setShowSearch(false);
                setShowCategory(false);
                setShowCompany(false);
                setShowColor(false);
                setShowPrice(false);
                setShowShipping(false);
              }
            }}
          >
            {expandForm ? "hide filters" : "show filters"}
          </button>
        )}
      </div>

      {/* the line separating the top and the form */}
      <div
        className=""
        style={{
          height: "1px",
          width: "300px",
          backgroundColor: "darkslategray",
        }}
      ></div>

      {/* the form */}
      {expandForm && (
        <form onSubmit={(e) => e.preventDefault()} className="">
          {/* search input */}
          <div className="form-control">
            <div>
              <span className="">Search</span>
              {windowSize < 1025 && (
                <button
                  className=""
                  onClick={() => {
                    if (!showSearch) {
                      setShowSearch(true);
                    } else {
                      setShowSearch(false);
                    }
                  }}
                >
                  {showSearch ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {showSearch && (
              <div className="">
                <input
                  type="text"
                  name="text"
                  placeholder="type here..."
                  className="search-input"
                  value={text}
                  onChange={myFilters}
                />
              </div>
            )}
          </div>
          {/* end of search input */}

          {/* categories */}
          <div className="">
            <div className="">
              <h5 className="">Category</h5>
              {windowSize < 1025 && (
                <button
                  className=""
                  onClick={() => {
                    if (!showCategory) {
                      setShowCategory(true);
                    } else {
                      setShowCategory(false);
                    }
                  }}
                >
                  {showCategory ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {showCategory && (
              <div className="">
                {categories.map((cat, index) => {
                  return (
                    <button
                      key={index}
                      className=""
                      type="button"
                      name="category"
                      onClick={myFilters}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          {/* end of categories */}

          {/* companies */}
          <div className="">
            <div className="">
              <h5 className="">Company</h5>
              {windowSize < 1025 && (
                <button
                  className=""
                  onClick={() => {
                    if (!showCompany) {
                      setShowCompany(true);
                    } else {
                      setShowCompany(false);
                    }
                  }}
                >
                  {showCompany ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {showCompany && (
              <div className="">
                <select
                  name="company"
                  value={company}
                  onChange={myFilters}
                  className=""
                >
                  {companies.map((comp, index) => {
                    return (
                      <option key={index} value={comp}>
                        {comp}
                      </option>
                    );
                  })}
                </select>
              </div>
            )}
          </div>
          {/* end of companies */}

          {/* colors */}
          <div className="">
            <div className="">
              <h5 className="">Color</h5>
              {windowSize < 1025 && (
                <button
                  className=""
                  onClick={() => {
                    if (!showColor) {
                      setShowColor(true);
                    } else {
                      setShowColor(false);
                    }
                  }}
                >
                  {showColor ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {showColor && (
              <div className="">
                {colors.map((col, index) => {
                  if (col === "all") {
                    return (
                      <button
                        key={index}
                        name="color"
                        onClick={myFilters}
                        data-color="all"
                        className=""
                        style={{
                          marginRight: "5px",
                        }}
                      >
                        all
                      </button>
                    );
                  }

                  return (
                    <button
                      key={index}
                      name="color"
                      data-color={col}
                      className=""
                      style={{
                        background: col,
                        width: "20px",
                        height: "20px",
                        marginRight: "5px",
                        border: "none",
                        borderRadius: "50%",
                        color: "white",
                      }}
                      onClick={myFilters}
                    >
                      {color === col.toLowerCase() ? (
                        <FaCheck className="" />
                      ) : null}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
          {/* end of colors */}

          {/* price */}
          <div className="">
            <div className="">
              <h5 className="">Price</h5>
              {windowSize < 1025 && (
                <button
                  className=""
                  onClick={() => {
                    if (!showPrice) {
                      setShowPrice(true);
                    } else {
                      setShowPrice(false);
                    }
                  }}
                >
                  {showPrice ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {showPrice && (
              <div className="">
                <p className="">{formatPrice(price)}</p>
                <input
                  type="range"
                  name="price"
                  onChange={myFilters}
                  min={min_price}
                  max={max_price}
                  value={price}
                  className=""
                />
              </div>
            )}
          </div>
          {/* end of price */}

          {/* shipping */}
          <div className="">
            <div className="">
              <h5 className="">Shipping Options</h5>
              {windowSize < 1025 && (
                <button
                  className=""
                  onClick={() => {
                    if (!showShipping) {
                      setShowShipping(true);
                    } else {
                      setShowShipping(false);
                    }
                  }}
                >
                  {showShipping ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>

            {showShipping && (
              <div className="">
                <label htmlFor="shipping" className="">
                  free shipping
                </label>
                <input
                  type="checkbox"
                  name="shipping"
                  id="shipping"
                  onChange={myFilters}
                  checked={shipping}
                />
              </div>
            )}
          </div>
          {/* end of shipping */}
        </form>
      )}

      {/* clear filters */}
      <div className="">
        <button
          className=""
          onClick={() =>
            dispatch(
              clearFilters({
                text: "",
                company: "all",
                category: "all",
                color: "all",
                shipping: false,
              })
            )
          }
        >
          Clear Filters
        </button>
      </div>
      {/* end of clear filters */}
    </section>
  );
};

export default Filters;
