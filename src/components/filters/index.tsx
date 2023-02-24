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

const Filters = () => {
  // get filters and products from the ProductsSlice
  const filters = useSelector(getFilters);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch<AppDispatch>();

  // variables for unique categories, colors, and companies
  const categories = getUniqueValues(products, "category");
  const colors = getUniqueValues(products, "colors");
  const companies = getUniqueValues(products, "company");

  // myFilters determines the filter name and value
  // dispatches the updateFiltersState action
  const myFilters = (myFilterValues: any) => {
    // fix typing for this function
    console.log(myFilterValues);
    const name = myFilterValues.target.name;
    let value: any = myFilterValues.target.value;

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
    console.log(name, value);
    dispatch(updateFiltersState({ name, value }));
  };

  // useEffect dispatches setFilters function which will iterate over the filtered_products (array of displayed products), according to the changes in the filters state made by the updateFiltersState function (sends the name of the relevant input and its value to the ProductsSlice, where the corresponding filter state gets updated).

  useEffect(() => {
    dispatch(setFilters(products));
  }, [dispatch, products, filters]);

  return (
    <div>
      Filters
      <div>
        <button name="company" value="ikea" onClick={(e) => myFilters(e)}>
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
