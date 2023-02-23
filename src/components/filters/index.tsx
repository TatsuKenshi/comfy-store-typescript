import { useState } from "react";
import {
  getFilters,
  setFilters,
  clearFilters,
  getFilteredProducts,
  getAllProducts,
} from "../../app/reducers/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getUniqueValues } from "../../utils/helpers";

const Filters = () => {
  const products = useSelector(getAllProducts);

  const categories = getUniqueValues(products, "category");
  const companies = getUniqueValues(products, "company");
  const colors = getUniqueValues(products, "colors");

  console.log(categories, companies, colors);
  return <div>Filters</div>;
};

export default Filters;
