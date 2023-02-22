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
  // fetching, action dispatch, url param, navigation variables
  let fetchRef = useRef(true);
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();
  let navigate = useNavigate();

  // slice getters for the single product, loading, and error states
  const product = useSelector(getSingleProduct);
  console.log(product);

  const productLoading = useSelector(getSingleProductLoading);
  const productError = useSelector(getSingleProductError);

  // fetch single product useEffect
  useEffect(() => {
    if (fetchRef.current) {
      dispatch(fetchSingleProduct(`${url}${params.id}`));
      fetchRef.current = false;
    }
  }, [dispatch, params.id]);

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
      <div>Singleproduct {params.id}</div>
      <ProductImages />
      <Stars />
      <AddToCart />
      <SimilarProducts />
    </>
  );
};

export default Singleproduct;
