import { useEffect } from "react";
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
import Loading from "../../components/loading";
import ErrorComponent from "../../components/error";
import PageHero from "../../components/page-hero";
import ProductImages from "../../components/product-images";
import Stars from "../../components/stars";
import AddToCart from "../../components/add-to-cart";
import SimilarProducts from "../../components/similar-products";
import CookieConsent from "react-cookie-consent";
import "./index.scss";

const SingleProduct = () => {
  // action dispatch, navigation, url param variables
  const dispatch = useDispatch<AppDispatch>();
  let navigate = useNavigate();
  const params = useParams();

  // slice getters for single product, loading, and error states
  const product = useSelector(getSingleProduct);
  const productLoading = useSelector(getSingleProductLoading);
  const productError = useSelector(getSingleProductError);

  // fetch single product useEffect
  useEffect(() => {
    dispatch(fetchSingleProduct(`${url}${params.id}`));
  }, [dispatch, params.id]);

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
    return (
      <>
        <ErrorComponent />
        <CookieConsent
          debug={true}
          location="bottom"
          style={{ background: "black", textAlign: "center" }}
          buttonStyle={{
            color: "black",
            background: "green",
            borderRadius: "20px",
            fontSize: "1rem",
          }}
          buttonText="Alright!"
          expires={1}
        >
          This Site Uses Cookies. Check out our{" "}
          <a href="/about">privacy policy</a> for more info.
        </CookieConsent>
      </>
    );
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
    <section>
      <PageHero title={name} product="products" />

      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
      </div>
      <div className="product-center">
        <ProductImages images={images} />

        <section className="content">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className="price">{formatPrice(price)}</h5>
          <p className="desc">{description}</p>
          <p className="info">
            <span className="">Availability : </span>
            {stock > 0 ? "In stock" : "Out of stock"}
          </p>
          <p className="info">
            <span className="">SKU : </span>
            {sku}
          </p>
          <p className="info">
            <span className="">Brand : </span>
            {company && capitalizeTitle(company)}
          </p>
          <hr className="info" />
          {stock > 0 && <AddToCart product={product} />}
        </section>
      </div>

      <div>
        <SimilarProducts />
      </div>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{ background: "black", textAlign: "center" }}
        buttonStyle={{
          color: "black",
          background: "green",
          borderRadius: "20px",
          fontSize: "1rem",
        }}
        buttonText="Alright!"
        expires={1}
      >
        This Site Uses Cookies. Check out our{" "}
        <a href="/about">privacy policy</a> for more info.
      </CookieConsent>
    </section>
  );
};

export default SingleProduct;
