import "./index.scss";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ChildrenPropType } from "../types";

const PrivateRoute = ({ children }: ChildrenPropType) => {
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <section>{children}</section>;
};
export default PrivateRoute;
