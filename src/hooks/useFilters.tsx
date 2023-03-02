import { useEffect } from "react";
import {
  updateFiltersState,
  getFilters,
  setFilters,
  getAllProducts,
} from "../app/reducers/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";

const useFilters = () => {
  const filters = useSelector(getFilters);
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch<AppDispatch>();

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

  return { myFilters };
};

export default useFilters;
