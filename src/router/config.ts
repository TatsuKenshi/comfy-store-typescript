import React from "react";

const Home = React.lazy(() => import("../pages/home/index"));
const About = React.lazy(() => import("../pages/about/index"));
const Products = React.lazy(() => import("../pages/products/index"));
const Contact = React.lazy(() => import("../pages/contact/index"));
const SingleProduct = React.lazy(() => import("../pages/single-product/index"));
const Cart = React.lazy(() => import("../pages/cart/index"));

const routes = [
  {
    id: 0,
    path: "/",
    element: Home,
  },
  {
    id: 1,
    path: "about",
    element: About,
  },
  {
    id: 2,
    path: "products",
    element: Products,
  },
  {
    id: 3,
    path: "contact",
    element: Contact,
  },
  {
    id: 4,
    path: "products/:id",
    element: SingleProduct,
  },
  {
    id: 5,
    path: "cart",
    element: Cart,
  },
];

export default routes;
