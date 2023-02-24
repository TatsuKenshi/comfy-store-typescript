import { useState, useEffect } from "react";
import {
  getFilters,
  setFilters,
  updateFiltersState,
  clearFilters,
  getAllProducts,
} from "../../app/reducers/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getUniqueValues } from "../../utils/helpers";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { formatPrice } from "../../utils/helpers";

const Filters = () => {
  // get and destructure filters and products from the ProductsSlice
  const filters = useSelector(getFilters);
  const { text, company, color, min_price, price, max_price, shipping } =
    filters;
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch<AppDispatch>();

  // variables for unique categories, colors, and companies
  const categories = getUniqueValues(products, "category");
  const colors = getUniqueValues(products, "colors");
  const companies = getUniqueValues(products, "company");

  // filter section visibility states for small screens
  // size tracks the window width
  const [size, setSize] = useState<number>(window.innerWidth);
  // expandForm tracks the visibility of the entire form
  const [expandForm, setExpandForm] = useState<boolean>(false);
  // states to track individual parts of the form
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showCompany, setShowCompany] = useState<boolean>(false);
  const [showColor, setShowColor] = useState<boolean>(false);
  const [showPrice, setShowPrice] = useState<boolean>(false);
  const [showShipping, setShowShipping] = useState<boolean>(false);

  // myFilters determines the filter name and value
  // to avoid dispatching non-serializable data in reducer
  // dispatches the updateFiltersState action with needed values
  // fix event prop (myFilterValues) typing for this function
  // button events don't have regular target properties
  // https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
  const myFilters = (myFilterValues: any): void => {
    const name: string = myFilterValues.target.name;
    let value: number | string | boolean = myFilterValues.target.value;

    if (name === "category") {
      value = myFilterValues.target.textContent;
    }
    if (name === "color") {
      value = myFilterValues.target.dataset.color;
    }
    if (name === "price") {
      value = Number(value);
    }
    if (name === "shipping") {
      value = myFilterValues.target.checked;
    }
    dispatch(updateFiltersState({ name, value }));
  };

  // useEffect dispatches setFilters action which will iterate over the all products array (and set the filtered_products array to what's left of it). setFilters work according to the changes in the filters state made by the updateFiltersState action (sends the name of the relevant input and its value to the ProductsSlice, where the corresponding filter state gets updated).
  useEffect(() => {
    dispatch(setFilters(products));
  }, [dispatch, products, filters]);

  // useEffect adds and removes window resize event
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));

    if (size >= 1025) {
      setExpandForm(true);
      setShowSearch(true);
      setShowCategory(true);
      setShowCompany(true);
      setShowColor(true);
      setShowPrice(true);
      setShowShipping(true);
    } else {
      setExpandForm(false);
      setShowSearch(false);
      setShowCategory(false);
      setShowCompany(false);
      setShowColor(false);
      setShowPrice(false);
      setShowShipping(false);
    }

    return () =>
      window.removeEventListener("resize", () => setSize(window.innerWidth));
  }, [size]);

  return (
    <section>
      <div className="">
        <h3 className="">Filters</h3>

        {/* main show/hide toggle button */}
        {size < 1025 && (
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
              {size < 1025 && (
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
                  onChange={(e) => myFilters(e)}
                />
              </div>
            )}
          </div>
          {/* end of search input */}

          {/* categories */}
          <div className="">
            <div className="">
              <h5 className="">Category</h5>
              {size < 1025 && (
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
                      onClick={(e) => myFilters(e)}
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
              {size < 1025 && (
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
                  onChange={(e) => myFilters(e)}
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
              {size < 1025 && (
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
                        onClick={(e) => myFilters(e)}
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
                      onClick={(e) => myFilters(e)}
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
              {size < 1025 && (
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
                  onChange={(e) => myFilters(e)}
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
              {size < 1025 && (
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
                  onChange={(e) => myFilters(e)}
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
