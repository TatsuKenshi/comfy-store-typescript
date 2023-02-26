import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import UserProvider from "./context/user-context/UserContext";
import "./index.css";
import AuthWrapper from "./pages/auth-wrapper";

// application wrappers go here, including the theming provider, i18next provider, etc

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <Provider store={store}>
          <AuthWrapper>
            {/* i18next */}
            <App />
            {/* i18next */}
          </AuthWrapper>
        </Provider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
