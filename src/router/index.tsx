import React from "react";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error";
import routes from "./config";

// routes go into this file

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
      {/* <Route
            path="checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          /> */}
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
