import { useState, useEffect } from "react";
import {
  getFilters,
  setFilters,
  updateFiltersState,
  clearFilters,
  getFilteredProducts,
  getAllProducts,
} from "../../app/reducers/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getUniqueValues } from "../../utils/helpers";

const Filters = () => {
  // get filters and products from the ProductsSlice
  const filters = useSelector(getFilters);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch<AppDispatch>();

  // variables for unique categories, colors, and companies
  const categories = getUniqueValues(products, "category");
  const colors = getUniqueValues(products, "colors");
  const companies = getUniqueValues(products, "company");

  // useEffect dispatches setFilters function which will iterate over the filtered_products (array of displayed products), according to the changes in the filters state caused by the updateFilters function (sends the name of the input and its value to the ProductsSlice, where the corresponding filter state gets updated).

  useEffect(() => {
    dispatch(setFilters(products));
  }, [dispatch, products, filters]);

  return (
    <div>
      Filters
      <div>
        <button
          onClick={() =>
            dispatch(
              updateFiltersState({
                name: "company",
                value: "ikea",
              })
            )
          }
        >
          Filter `em!
        </button>
        <button
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
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
