import "./index.scss";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// type for the children prop
type Props = {
  children: React.ReactNode;
};

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth0();

  if (!user) {
    return <Navigate to="/" />;
  }

  return <section>{children}</section>;
};
export default PrivateRoute;
