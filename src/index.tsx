import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

// application wrappers go here, including the theming provider, i18next provider, etc

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* app providers, authProvider */}
    <Provider store={store}>
      {/* app providers, userProvider */}
      {/* app providers, productProvider */}
      {/* app providers, filterProvider */}
      {/* app providers, cartProvider */}
      {/* app providers, authWrapper */}
      {/* i18next */}
      <App />
      {/* i18next */}
      {/* app providers, authWrapper */}
      {/* app providers, cartProvider */}
      {/* app providers, filterProvider */}
      {/* app providers, productProvider */}
      {/* app providers, userProvider */}
    </Provider>
    {/* app providers, authProvider */}
  </React.StrictMode>
);
