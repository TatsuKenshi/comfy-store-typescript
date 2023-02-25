import React from "react";

const Home = React.lazy(() => import("../pages/home/index"));
const About = React.lazy(() => import("../pages/about/index"));
const Checkout = React.lazy(() => import("../pages/checkout/index"));
const Products = React.lazy(() => import("../pages/products/index"));
const Contact = React.lazy(() => import("../pages/contact/index"));
const SingleProduct = React.lazy(() => import("../pages/single-product/index"));
const Cart = React.lazy(() => import("../pages/cart/index"));

const routes = [
  {
    id: 0,
    path: "/",
    folder: "home",
    element: Home,
  },
  {
    id: 1,
    path: "about",
    folder: "about",
    element: About,
  },
  {
    id: 2,
    path: "checkout",
    folder: "checkout",
    element: Checkout,
  },
  {
    id: 3,
    path: "products",
    folder: "products",
    element: Products,
  },
  {
    id: 4,
    path: "contact",
    folder: "contact",
    element: Contact,
  },
  {
    id: 5,
    path: "products/:id",
    folder: "single-product",
    element: SingleProduct,
  },
  {
    id: 6,
    path: "cart",
    folder: "cart",
    element: Cart,
  },
];

export default routes;
