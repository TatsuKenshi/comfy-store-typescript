import React from "react";
import "./index.scss";
import { useEffect, useRef } from "react";
import { products_url as url } from "../../utils/constants";
import {
  fetchAllProducts,
  getAllProducts,
} from "../../app/reducers/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";

const Products = () => {
  let fetchRef = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const prods = useSelector(getAllProducts);

  useEffect(() => {
    if (fetchRef.current) {
      dispatch(fetchAllProducts(url));
      fetchRef.current = false;
    }
  }, [dispatch]);
  return (
    <div>
      Products
      <div>
        {prods.map((prod: {}, index: number) => {
          return <span key={index}>{index}</span>;
        })}
      </div>
    </div>
  );
};

export default Products;
