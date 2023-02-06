import React from "react";

const Home = React.lazy(() => import("../pages/home/index"));
const About = React.lazy(() => import("../pages/about/index"));
const Checkout = React.lazy(() => import("../pages/checkout/index"));

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
    id: 1,
    path: "checkout",
    folder: "checkout",
    element: Checkout,
  },
];

export default routes;
