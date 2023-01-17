import React from "react";
import { Routes, Route } from "react-router-dom";
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
    </Routes>
  );
};

export default Router;
