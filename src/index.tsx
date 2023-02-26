import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import UserProvider from "./context/user-context/UserContext";
import "./index.css";

// application wrappers go here, including the theming provider, i18next provider, etc

// auth domain dev-n7f-c1rx.us.auth0.com
// auth clientid Kdv0f1TxqUbSMGqU4nUKWggSyrrHBOBk

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* app providers, authProvider */}
    <Auth0Provider
      domain="dev-n7f-c1rx.us.auth0.com"
      clientId="Kdv0f1TxqUbSMGqU4nUKWggSyrrHBOBk"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
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
      </UserProvider>
    </Auth0Provider>
    {/* app providers, authProvider */}
  </React.StrictMode>
);
