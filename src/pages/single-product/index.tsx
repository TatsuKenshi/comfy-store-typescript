import { useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../app/store";
import {
  fetchSingleProduct,
  getSingleProduct,
  getSingleProductError,
  getSingleProductLoading,
} from "../../app/reducers/productsSlice";
import { single_product_url as url } from "../../utils/constants";
import { capitalizeTitle, formatPrice } from "../../utils/helpers";
import { ProductType, SingleProductType } from "../../app/types";
import Loading from "../../components/loading";
import ErrorComponent from "../../components/error";
import PageHero from "../../components/page-hero";
import ProductImages from "../../components/product-images";
import Stars from "../../components/stars";
import AddToCart from "../../components/add-to-cart";
import SimilarProducts from "../../components/similar-products";
import "./index.scss";

const Singleproduct = () => {
  // fetch ref, action dispatch, navigation, url param variables
  let fetchRef = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  const { id } = useParams();

  // slice getters for single product, loading, and error states
  const product = useSelector(getSingleProduct);
  const productLoading = useSelector(getSingleProductLoading);
  const productError = useSelector(getSingleProductError);

  // fetch single product useEffect
  useEffect(() => {
    if (fetchRef.current) {
      dispatch(fetchSingleProduct(`a${url}${id}`));
      fetchRef.current = false;
    }
  }, [dispatch, id]);

  // error redirection useEffect
  useEffect(() => {
    if (productError) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [productError, navigate]);

  // loading return
  if (productLoading) {
    return <Loading />;
  }

  // error return
  if (productError) {
    return <ErrorComponent />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  // regular return
  return (
    <>
      <PageHero title={name} product="products" />
      <div>Singleproduct {id}</div>
      <ProductImages />
      <Stars />
      <AddToCart />
      <SimilarProducts />
    </>
  );
};

export default Singleproduct;
