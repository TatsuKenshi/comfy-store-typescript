import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error";
import routes from "./config";
import PrivateRoute from "../pages/private-route/index";
import Checkout from "../pages/checkout/index";

const Router = () => {
  return (
    <Routes>
      {routes.map((routeItem) => {
        return (
          <Route
            key={routeItem.id}
            path={routeItem.path}
            element={
              <React.Suspense fallback={null}>
                <routeItem.element />
              </React.Suspense>
            }
          />
        );
      })}
      <Route
        path="checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
